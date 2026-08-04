export const PAYMENT_CHECKOUT_STORAGE_KEY = "hiba_payment_checkout"

export type PaymentGatewayId = "ubl" | "blinq"

export type PaymentCheckoutDonor = {
  name: string
  email: string
  phone: string
  country: string
  city: string
  cnic: string
  remarks?: string
}

export type PaymentCheckoutCartLine = {
  causeLabel: string
  typeLabel: string
  quantity: number
  unitPkr: number
  tag?: string
}

export type PaymentCheckoutPayload = {
  merchantName: string
  order: string
  orderDescription: string
  donationAmount: number
  bankCharges: number
  totalPayable: number
  gateway: PaymentGatewayId
  donationFrequency: "once" | "recurring"
  donor?: PaymentCheckoutDonor
  cartLines?: PaymentCheckoutCartLine[]
}

/** ~1.01% processing estimate (demo). */
export function estimatedBankCharges(donation: number) {
  return Number((donation * 0.010108333).toFixed(2))
}

export function readPaymentCheckoutPayload(): PaymentCheckoutPayload | null {
  try {
    const raw = sessionStorage.getItem(PAYMENT_CHECKOUT_STORAGE_KEY)
    if (!raw) return null
    const p = JSON.parse(raw) as PaymentCheckoutPayload
    if (typeof p.totalPayable !== "number" || !p.merchantName) return null
    return p
  } catch {
    return null
  }
}
