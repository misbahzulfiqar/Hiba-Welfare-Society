import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react"
import { Check, ChevronLeft, Minus, Plus, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { Logo } from "@/components/layout/Logo"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import {
  fitraFormOptions,
  genericFormOptions,
  getDonationItemBySlug,
} from "@/data/donationItems"
import { navigateTo } from "@/lib/navigation"
import { DonationCartSheet, formatPkr, type DonationCartLine } from "@/components/donate/DonationCartSheet"
import { PaymentInformationDialog } from "@/components/donate/PaymentInformationDialog"
import { PaymentGatewayLoadingOverlay } from "@/components/donate/PaymentGatewayLoadingOverlay"
import {
  PAYMENT_CHECKOUT_STORAGE_KEY,
  estimatedBankCharges,
  type PaymentCheckoutPayload,
} from "@/lib/paymentCheckout"

const TORN_CLIP =
  "polygon(0 0,calc(100% - 18px) 0,100% 2.5%,calc(100% - 10px) 5%,100% 7.5%,calc(100% - 15px) 10%,100% 12.5%,calc(100% - 12px) 15%,100% 17.5%,calc(100% - 17px) 20%,100% 22.5%,calc(100% - 9px) 25%,100% 27.5%,calc(100% - 14px) 30%,100% 32.5%,calc(100% - 11px) 35%,100% 37.5%,calc(100% - 16px) 40%,100% 42.5%,calc(100% - 10px) 45%,100% 47.5%,calc(100% - 13px) 50%,100% 52.5%,calc(100% - 18px) 55%,100% 57.5%,calc(100% - 11px) 60%,100% 62.5%,calc(100% - 15px) 65%,100% 67.5%,calc(100% - 9px) 70%,100% 72.5%,calc(100% - 14px) 75%,100% 77.5%,calc(100% - 12px) 80%,100% 82.5%,calc(100% - 17px) 85%,100% 87.5%,calc(100% - 10px) 90%,100% 92.5%,calc(100% - 16px) 95%,100% 97.5%,calc(100% - 13px) 100%,0 100%)"

const STEPS = [
  { n: 1, label: "Amount & Initiative" },
  { n: 2, label: "Personal Details" },
  { n: 3, label: "Payment" },
] as const

function CheckoutStepper({ step }: { step: number }) {
  return (
    <div className="w-full max-w-3xl">
      <div className="flex items-center px-1">
        {STEPS.map((s, i) => {
          const completed = step > s.n
          const active = step === s.n
          return (
            <div key={s.n} className="flex min-w-0 flex-1 items-center last:flex-none">
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors sm:h-10 sm:w-10",
                  completed || active
                    ? "bg-green-deep text-white"
                    : "border-2 border-neutral-300 bg-white text-neutral-400",
                )}
              >
                {completed ? <Check className="h-5 w-5 sm:h-5 sm:w-5" strokeWidth={2.5} /> : s.n}
              </div>
              {i < STEPS.length - 1 ? (
                <div
                  className={cn(
                    "mx-0.5 h-0.5 min-h-px flex-1 sm:mx-2",
                    step > s.n ? "bg-green-deep" : "bg-neutral-200",
                  )}
                />
              ) : null}
            </div>
          )
        })}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1 text-center sm:gap-2">
        {STEPS.map((s) => (
          <span
            key={s.label}
            className={cn(
              "text-[10px] font-medium leading-tight sm:text-xs",
              step === s.n ? "text-green-deep" : step > s.n ? "text-neutral-600" : "text-neutral-400",
            )}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  )
}

function Req({ children }: { children: ReactNode }) {
  return (
    <>
      {children} <span className="text-red-600">*</span>
    </>
  )
}

type OrderSummaryProps = {
  lines: DonationCartLine[]
  onChangeQuantity: (id: string, quantity: number) => void
  onRemoveLine: (id: string) => void
  primaryLabel: string
  onPrimary: () => void
  primaryDisabled?: boolean
}

function OrderSummaryCard({
  lines,
  onChangeQuantity,
  onRemoveLine,
  primaryLabel,
  onPrimary,
  primaryDisabled,
}: OrderSummaryProps) {
  const subtotal = lines.reduce((sum, line) => sum + line.unitPkr * line.quantity, 0)

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md sm:p-6">
      <div className="flex max-h-[320px] flex-col gap-4 overflow-y-auto pr-1">
        {lines.map((line) => (
          <div key={line.id} className="relative flex gap-3 border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
            <button
              type="button"
              onClick={() => onRemoveLine(line.id)}
              className="absolute right-0 top-0 text-neutral-400 hover:text-red-600"
              aria-label="Remove item"
            >
              <Trash2 className="h-4 w-4" />
            </button>
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
              <img src={line.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1 pr-8">
              <p className="font-bold text-black">{line.causeLabel}</p>
              <p className="text-sm text-neutral-500">{line.tag ?? line.typeLabel}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onChangeQuantity(line.id, Math.max(1, line.quantity - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="min-w-[1.5rem] text-center text-sm font-semibold tabular-nums">
                  {line.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => onChangeQuantity(line.id, line.quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-sm font-bold text-green-deep">{formatPkr(line.unitPkr * line.quantity)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-neutral-200 pt-4">
        <div className="flex justify-between font-bold text-black">
          <span>Total Donation</span>
          <span className="text-green-deep">{formatPkr(subtotal)}</span>
        </div>
      </div>

      <Button
        type="button"
        className="mt-5 h-12 w-full rounded-xl bg-green-deep text-base font-bold uppercase tracking-wide text-white shadow-md hover:bg-green-deep/90"
        onClick={onPrimary}
        disabled={primaryDisabled || lines.length === 0}
      >
        {primaryLabel}
      </Button>
    </div>
  )
}

const checkboxClass =
  "h-5 w-5 rounded border-green-deep data-[state=checked]:border-green-deep data-[state=checked]:bg-green-deep data-[state=checked]:text-white"

type DonationItemPageProps = {
  slug: string
}

export function DonationItemPage({ slug }: DonationItemPageProps) {
  const item = useMemo(() => getDonationItemBySlug(slug), [slug])
  const opts = item?.formVariant === "fitra" ? fitraFormOptions : genericFormOptions

  const [step, setStep] = useState(1)
  const [cause, setCause] = useState("")
  const [donationType, setDonationType] = useState("")
  const [amount, setAmount] = useState("")
  const [customAmountPkr, setCustomAmountPkr] = useState("")

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("pakistan")
  const [city, setCity] = useState("")
  const [phoneCode, setPhoneCode] = useState("+92")
  const [phoneLocal, setPhoneLocal] = useState("")
  const [cnic, setCnic] = useState("")
  const [remarks, setRemarks] = useState("")
  const [saveInfo, setSaveInfo] = useState(true)
  const [subEmail, setSubEmail] = useState(true)
  const [subWhatsapp, setSubWhatsapp] = useState(true)
  const [subSms, setSubSms] = useState(true)

  const [cartOpen, setCartOpen] = useState(false)
  const [cartLines, setCartLines] = useState<DonationCartLine[]>([])
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [paymentGatewayLoading, setPaymentGatewayLoading] = useState(false)

  const cartSubtotalPkr = useMemo(
    () => cartLines.reduce((sum, line) => sum + line.unitPkr * line.quantity, 0),
    [cartLines],
  )

  useEffect(() => {
    if (!item) {
      toast.error("Donation category not found")
      navigateTo("/donate")
    }
  }, [item])

  useEffect(() => {
    const current = getDonationItemBySlug(slug)
    if (!current) return
    if (current.formVariant === "fitra") {
      setCause(fitraFormOptions.causes[0]?.value ?? "")
      setDonationType(fitraFormOptions.types[0]?.value ?? "")
      setAmount(fitraFormOptions.amounts[0]?.value ?? "")
    } else {
      setCause(genericFormOptions.causes[0]?.value ?? "")
      setDonationType(genericFormOptions.types[0]?.value ?? "")
      setAmount(genericFormOptions.amounts[0]?.value ?? "")
    }
    setStep(1)
    setCartOpen(false)
    setCartLines([])
    setFullName("")
    setEmail("")
    setCountry("pakistan")
    setCity("")
    setPhoneCode("+92")
    setPhoneLocal("")
    setCnic("")
    setRemarks("")
    setSaveInfo(true)
    setSubEmail(true)
    setSubWhatsapp(true)
    setSubSms(true)
    setPaymentModalOpen(false)
    setPaymentGatewayLoading(false)
    setCustomAmountPkr("")
  }, [slug])

  useEffect(() => {
    if (step >= 2 && cartLines.length === 0) {
      setStep(1)
      toast.message("Your cart was empty — start again from step 1.")
    }
  }, [step, cartLines.length])

  if (!item) {
    return null
  }

  const kicker = item.heroKicker ?? "Your support"
  const useBadge = item.formVariant === "fitra" ? fitraFormOptions.useBadge : undefined

  const goBack = () => navigateTo("/donate")

  const handleStep1Next = (e: FormEvent) => {
    e.preventDefault()
    if (!cause || !donationType || !amount) {
      toast.error("Please complete all fields")
      return
    }
    const causeLabel = opts.causes.find((c) => c.value === cause)?.label ?? cause
    const typeLabel = opts.types.find((t) => t.value === donationType)?.label ?? donationType

    let unitPkr: number
    if (amount === "custom") {
      const raw = customAmountPkr.replace(/,/g, "").trim()
      unitPkr = Number.parseFloat(raw)
      if (!Number.isFinite(unitPkr) || unitPkr < 1) {
        toast.error("Enter your amount in PKR (minimum 1)")
        return
      }
      unitPkr = Math.round(unitPkr * 100) / 100
    } else {
      unitPkr = Number.parseInt(amount, 10)
      if (!Number.isFinite(unitPkr) || unitPkr <= 0) {
        toast.error("Invalid amount")
        return
      }
    }
    setCartLines((prev) => {
      const idx = prev.findIndex(
        (l) =>
          l.causeLabel === causeLabel && l.typeLabel === typeLabel && l.unitPkr === unitPkr,
      )
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 }
        return next
      }
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          causeLabel,
          typeLabel,
          tag: useBadge,
          unitPkr,
          quantity: 1,
          image: item.image,
        },
      ]
    })
    setCartOpen(true)
  }

  const handleCartQuantity = (id: string, quantity: number) => {
    setCartLines((prev) => prev.map((l) => (l.id === id ? { ...l, quantity } : l)))
  }

  const handleRemoveCartLine = (id: string) => {
    setCartLines((prev) => prev.filter((l) => l.id !== id))
  }

  const handleCartAddMore = () => {
    setCartOpen(false)
  }

  const handleCartProceedToPay = () => {
    if (cartLines.length === 0) {
      toast.error("Your cart is empty")
      return
    }
    setCartOpen(false)
    setStep(2)
  }

  const validatePersonalDetails = () => {
    if (!fullName.trim()) {
      toast.error("Please enter donor name")
      return false
    }
    if (!email.trim()) {
      toast.error("Please enter email")
      return false
    }
    if (!country) {
      toast.error("Please select country")
      return false
    }
    if (!city.trim()) {
      toast.error("Please enter city")
      return false
    }
    if (!phoneLocal.trim()) {
      toast.error("Please enter phone number")
      return false
    }
    if (!cnic.trim()) {
      toast.error("Please enter CNIC or NTN")
      return false
    }
    return true
  }

  const handleProceedToPayFromSummary = () => {
    if (!validatePersonalDetails()) return
    setPaymentModalOpen(true)
  }

  const handlePaymentModalProceed = (opts: {
    gateway: PaymentCheckoutPayload["gateway"]
    donationType: "once" | "recurring"
  }) => {
    setPaymentModalOpen(false)
    const charges = estimatedBankCharges(cartSubtotalPkr)
    const total = Number((cartSubtotalPkr + charges).toFixed(2))
    const payload: PaymentCheckoutPayload = {
      merchantName: "HIBA WELFARE SOCIETY",
      order: "Donation",
      orderDescription: "Online Donation",
      donationAmount: cartSubtotalPkr,
      bankCharges: charges,
      totalPayable: total,
      gateway: opts.gateway,
      donationFrequency: opts.donationType,
      donor: {
        name: fullName.trim(),
        email: email.trim(),
        phone: `${phoneCode} ${phoneLocal.trim()}`,
        country,
        city: city.trim(),
        cnic: cnic.trim(),
        remarks: remarks.trim() || undefined,
      },
      cartLines: cartLines.map((l) => ({
        causeLabel: l.causeLabel,
        typeLabel: l.typeLabel,
        quantity: l.quantity,
        unitPkr: l.unitPkr,
        tag: l.tag,
      })),
    }
    sessionStorage.setItem(PAYMENT_CHECKOUT_STORAGE_KEY, JSON.stringify(payload))
    setPaymentGatewayLoading(true)
    window.setTimeout(() => {
      setPaymentGatewayLoading(false)
      navigateTo("/payment-details")
    }, 2200)
  }

  const checkoutChrome = (body: ReactNode, stepperStep: number) => (
    <section className="min-h-screen bg-[#f3f3f3] py-8 md:py-12">
      <div className="mx-auto w-[92%] max-w-6xl">
        <button
          type="button"
          onClick={() => {
            if (paymentModalOpen) {
              setPaymentModalOpen(false)
            } else if (step === 2) {
              setStep(1)
            }
          }}
          className="mb-6 flex items-center gap-1 text-sm font-semibold text-neutral-700 hover:text-green-deep"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Back
        </button>
        <CheckoutStepper step={stepperStep} />
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_minmax(280px,380px)]">{body}</div>
      </div>
    </section>
  )

  if (step >= 2) {
    const stepperStep = paymentModalOpen ? 3 : 2
    return (
      <>
        {checkoutChrome(
          <>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              {step === 2 ? (
                <>
                  <h2 className="text-xl font-bold text-black sm:text-2xl">Personal details</h2>
                  <p className="mt-1 text-sm text-neutral-500">All fields marked with * are required.</p>

                  <div className="mt-8 grid gap-5 gap-x-6 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-1">
                      <Label htmlFor="chk-donor-name">
                        <Req>Donor Name</Req>
                      </Label>
                      <Input
                        id="chk-donor-name"
                        className="h-11 rounded-lg border-neutral-300"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-1">
                      <Label htmlFor="chk-donor-email">
                        <Req>Email</Req>
                      </Label>
                      <Input
                        id="chk-donor-email"
                        type="email"
                        className="h-11 rounded-lg border-neutral-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-1">
                      <Label htmlFor="chk-country">
                        <Req>Country</Req>
                      </Label>
                      <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger id="chk-country" className="h-11 rounded-lg border-neutral-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pakistan">Pakistan</SelectItem>
                          <SelectItem value="uae">UAE</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 sm:col-span-1">
                      <Label htmlFor="chk-city">
                        <Req>City</Req>
                      </Label>
                      <Input
                        id="chk-city"
                        className="h-11 rounded-lg border-neutral-300"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="chk-phone-local">
                        <Req>Phone</Req>
                      </Label>
                      <div className="flex h-11 overflow-hidden rounded-lg border border-neutral-300 bg-white">
                        <Select value={phoneCode} onValueChange={setPhoneCode}>
                          <SelectTrigger className="h-full w-[108px] shrink-0 rounded-none border-0 border-r border-neutral-300 text-sm shadow-none focus:ring-0">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+92">+92</SelectItem>
                            <SelectItem value="+971">+971</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          id="chk-phone-local"
                          className="h-full flex-1 rounded-none border-0 text-base shadow-none focus-visible:ring-0"
                          placeholder="325 4112562"
                          value={phoneLocal}
                          onChange={(e) => setPhoneLocal(e.target.value)}
                          autoComplete="tel-national"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="chk-cnic">
                        <Req>CNIC / NTN Number</Req>
                      </Label>
                      <Input
                        id="chk-cnic"
                        className="h-11 rounded-lg border-neutral-300"
                        placeholder="Enter CNIC or NTN"
                        value={cnic}
                        onChange={(e) => setCnic(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="chk-remarks">Remarks</Label>
                      <Textarea
                        id="chk-remarks"
                        className="min-h-[120px] rounded-lg border-neutral-300"
                        placeholder="Remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <label className="flex cursor-pointer items-start gap-3 text-sm">
                      <Checkbox
                        checked={saveInfo}
                        onCheckedChange={(v) => setSaveInfo(v === true)}
                        className={checkboxClass}
                      />
                      <span>Save info for future donations</span>
                    </label>
                    <label className="flex cursor-pointer items-start gap-3 text-sm">
                      <Checkbox
                        checked={subEmail}
                        onCheckedChange={(v) => setSubEmail(v === true)}
                        className={checkboxClass}
                      />
                      <span>Subscribe to get updates on email</span>
                    </label>
                    <label className="flex cursor-pointer items-start gap-3 text-sm">
                      <Checkbox
                        checked={subWhatsapp}
                        onCheckedChange={(v) => setSubWhatsapp(v === true)}
                        className={checkboxClass}
                      />
                      <span>Get updates on whatsapp</span>
                    </label>
                    <label className="flex cursor-pointer items-start gap-3 text-sm">
                      <Checkbox
                        checked={subSms}
                        onCheckedChange={(v) => setSubSms(v === true)}
                        className={checkboxClass}
                      />
                      <span>Get updates on sms</span>
                    </label>
                  </div>
                </>
              ) : null}
            </div>

            <div className="lg:sticky lg:top-8">
              <OrderSummaryCard
                lines={cartLines}
                onChangeQuantity={handleCartQuantity}
                onRemoveLine={handleRemoveCartLine}
                primaryLabel="PROCEED TO PAY"
                onPrimary={handleProceedToPayFromSummary}
              />
            </div>
          </>,
          stepperStep,
        )}
        <PaymentInformationDialog
          open={paymentModalOpen}
          onOpenChange={setPaymentModalOpen}
          donationAmountPkr={cartSubtotalPkr}
          onProceedToPayment={handlePaymentModalProceed}
        />
        <DonationCartSheet
          open={cartOpen}
          onOpenChange={setCartOpen}
          lines={cartLines}
          onChangeQuantity={handleCartQuantity}
          onRemoveLine={handleRemoveCartLine}
          onAddMore={handleCartAddMore}
          onProceedToPay={handleCartProceedToPay}
        />
        <PaymentGatewayLoadingOverlay open={paymentGatewayLoading} />
      </>
    )
  }

  return (
    <>
      <section className="relative min-h-[min(100vh,920px)] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={item.image}
            alt=""
            className="h-full w-full scale-105 object-cover blur-[3px]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/45" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[min(100vh,920px)] max-w-[1400px] md:grid-cols-2">
          <div className="relative flex items-stretch py-8 pl-4 pr-0 md:py-10 md:pl-8 lg:pl-12">
            <div
              className="flex max-w-lg flex-col justify-center gap-5 bg-[#f4f1ea] px-6 py-10 shadow-lg md:px-10 md:py-14"
              style={{ clipPath: TORN_CLIP }}
            >
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 self-start text-sm font-semibold text-neutral-700 hover:text-green-deep"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                Categories
              </button>
              <Logo className="h-12 w-auto max-w-[200px] md:h-14" />
              <div className="space-y-2 pt-2">
                <p className="text-sm font-medium text-neutral-700 md:text-base">{kicker}</p>
                <h1 className="text-3xl font-black leading-tight tracking-tight text-black md:text-4xl lg:text-[2.75rem]">
                  {item.title}
                </h1>
                <p className="max-w-sm text-base text-neutral-800 md:text-lg">
                  {item.heroSubline ? (
                    item.heroSubline
                  ) : (
                    <>
                      is a hope for <strong className="font-bold text-black">families in need</strong>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 md:px-8 md:py-12">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <CheckoutStepper step={step} />

              <form onSubmit={handleStep1Next} className="mt-8 space-y-5">
                <div className="space-y-2">
                  <Badge className="rounded-full border-0 bg-[#c8e6c0] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-deep hover:bg-[#c8e6c0]">
                    Donation type
                  </Badge>
                  <h2 className="text-2xl font-bold text-black">{item.title}</h2>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-1">
                  <Label className="text-xs font-bold uppercase tracking-wide text-neutral-600">
                    Select Donation Use
                  </Label>
                  {useBadge ? (
                    <span className="rounded-full bg-[#c8e6c0] px-2.5 py-0.5 text-[10px] font-bold uppercase text-green-deep">
                      {useBadge}
                    </span>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
                    Donation cause
                  </Label>
                  <Select value={cause} onValueChange={setCause}>
                    <SelectTrigger className="h-11 rounded-lg border-neutral-300 bg-white">
                      <SelectValue placeholder="Select cause" />
                    </SelectTrigger>
                    <SelectContent>
                      {opts.causes.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wide text-neutral-500">Type</Label>
                  <Select value={donationType} onValueChange={setDonationType}>
                    <SelectTrigger className="h-11 rounded-lg border-neutral-300 bg-white">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {opts.types.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
                    Donation amount
                  </Label>
                  <Select
                    value={amount}
                    onValueChange={(v) => {
                      setAmount(v)
                      if (v !== "custom") setCustomAmountPkr("")
                    }}
                  >
                    <SelectTrigger className="h-11 rounded-lg border-neutral-300 bg-white">
                      <SelectValue placeholder="Select amount" />
                    </SelectTrigger>
                    <SelectContent>
                      {opts.amounts.map((a) => (
                        <SelectItem key={a.value} value={a.value}>
                          {a.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {amount === "custom" ? (
                    <div className="space-y-1 pt-1">
                      <Label htmlFor="donation-custom-amount" className="text-xs text-neutral-600">
                        Enter amount (PKR)
                      </Label>
                      <Input
                        id="donation-custom-amount"
                        type="number"
                        inputMode="decimal"
                        min={1}
                        step="any"
                        placeholder="e.g. 50 or 1250.50"
                        className="h-11 rounded-lg border-neutral-300"
                        value={customAmountPkr}
                        onChange={(e) => setCustomAmountPkr(e.target.value)}
                      />
                    </div>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-green-deep text-base font-bold uppercase tracking-wide text-white hover:bg-green-deep/90"
                >
                  Proceed
                </Button>
              </form>

              <p className="mt-8 text-center text-xs leading-relaxed text-neutral-400">
                When we support Hiba Welfare Society, we help deliver transparent aid across Pakistan. Every contribution
                strengthens food, health, and education for those who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>
      <DonationCartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        lines={cartLines}
        onChangeQuantity={handleCartQuantity}
        onRemoveLine={handleRemoveCartLine}
        onAddMore={handleCartAddMore}
        onProceedToPay={handleCartProceedToPay}
      />
      <PaymentGatewayLoadingOverlay open={paymentGatewayLoading} />
    </>
  )
}
