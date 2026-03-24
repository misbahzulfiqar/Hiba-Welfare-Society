import { useMemo } from "react"
import { Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type DonorTabKey = "login" | "register" | "forgot-password"

type DonorDashboardPageProps = {
  defaultTab?: DonorTabKey
}

function getPathBasedDefaultTab(fallback: DonorTabKey): DonorTabKey {
  const currentPath = window.location.pathname.toLowerCase()
  if (currentPath === "/donor-signup") return "register"
  if (currentPath === "/donor-forgot-password") return "forgot-password"
  return fallback
}

export function DonorDashboardPage({ defaultTab = "login" }: DonorDashboardPageProps) {
  const initialTab = useMemo(() => getPathBasedDefaultTab(defaultTab), [defaultTab])

  return (
    <section className="bg-[hsl(120,8%,92%)] py-8 md:py-10">
      <div className="mx-auto w-[92%] max-w-[980px]">
        <h1 className="text-center text-[28px] font-black uppercase tracking-tight text-[#0b0f17] md:text-[34px]">
          Donor Dashboard
        </h1>

        <Tabs defaultValue={initialTab} className="mt-6">
          <TabsList className="h-auto rounded-lg border border-black/10 bg-white p-1">
            <TabsTrigger value="login" className="px-4 py-1.5 text-sm font-semibold">
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="px-4 py-1.5 text-sm font-semibold">
              Register
            </TabsTrigger>
            <TabsTrigger value="forgot-password" className="px-4 py-1.5 text-sm font-semibold">
              Forgot Password?
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="mt-3 rounded-3xl border border-black/10 bg-[hsl(120,7%,94%)] shadow-sm">
              <CardContent className="space-y-5 p-6 md:p-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#111827]">Login</h2>
                  <p className="mt-2 text-base text-muted-foreground">
                    Enter your email and password to sign in to your account.
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="donor-login-email" className="text-xl font-semibold text-[#111827]">
                    Email
                  </label>
                  <Input id="donor-login-email" placeholder="donor@example.com" className="h-11 bg-white text-base" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="donor-login-password" className="text-xl font-semibold text-[#111827]">
                    Password
                  </label>
                  <Input
                    id="donor-login-password"
                    type="password"
                    placeholder="Enter your password"
                    className="h-11 bg-white text-base"
                  />
                </div>

                <Button className="h-11 w-full bg-green-deep text-base font-bold text-white hover:bg-green-deep/90">
                  Login
                </Button>

                <Alert className="border border-black/10 bg-[hsl(120,10%,94%)] text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm leading-relaxed">
                    Your donation history is linked to your email address. Please use the same email consistently to
                    keep all your donation records in one place.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="mt-3 rounded-3xl border border-black/10 bg-[hsl(120,7%,94%)] shadow-sm">
              <CardContent className="space-y-5 p-6 md:p-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#111827]">Register</h2>
                  <p className="mt-2 text-base text-muted-foreground">
                    Create a new account by entering your email and choosing a password.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="donor-name" className="text-xl font-semibold text-[#111827]">
                      Donor Name
                    </label>
                    <Input id="donor-name" placeholder="Enter your name" className="h-11 bg-white text-base" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="donor-register-email" className="text-xl font-semibold text-[#111827]">
                      Email
                    </label>
                    <Input
                      id="donor-register-email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-11 bg-white text-base"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="donor-country" className="text-xl font-semibold text-[#111827]">
                      Country
                    </label>
                    <Select defaultValue="pakistan">
                      <SelectTrigger id="donor-country" className="h-11 bg-white text-base">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
                        <SelectItem value="uae">UAE</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="donor-phone" className="text-xl font-semibold text-[#111827]">
                      Phone Number
                    </label>
                    <div className="flex h-11 overflow-hidden rounded-md border border-input bg-white">
                      <Select defaultValue="+92">
                        <SelectTrigger className="h-full w-[96px] rounded-none border-0 border-r text-sm shadow-none focus:ring-0">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+92">PK +92</SelectItem>
                          <SelectItem value="+971">UAE +971</SelectItem>
                          <SelectItem value="+44">UK +44</SelectItem>
                          <SelectItem value="+1">US +1</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        id="donor-phone"
                        placeholder="1234567890"
                        className="h-full rounded-none border-0 text-base shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="donor-register-password" className="text-xl font-semibold text-[#111827]">
                    Password
                  </label>
                  <Input
                    id="donor-register-password"
                    type="password"
                    placeholder="Enter your password"
                    className="h-11 bg-white text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="donor-register-retype-password" className="text-xl font-semibold text-[#111827]">
                    Retype Password
                  </label>
                  <Input
                    id="donor-register-retype-password"
                    type="password"
                    placeholder="Retype your password"
                    className="h-11 bg-white text-base"
                  />
                </div>

                <Button className="h-11 w-full bg-green-deep text-base font-bold text-white hover:bg-green-deep/90">
                  Create Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forgot-password">
            <Card className="mt-3 rounded-3xl border border-black/10 bg-[hsl(120,7%,94%)] shadow-sm">
              <CardContent className="space-y-5 p-6 md:p-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#111827]">Forgot Password</h2>
                  <p className="mt-2 text-base text-muted-foreground">
                    Enter your email address to receive a password reset link.
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="donor-forgot-email" className="text-xl font-semibold text-[#111827]">
                    Email address
                  </label>
                  <Input id="donor-forgot-email" type="email" className="h-11 bg-white text-base" />
                </div>

                <div>
                  <Button className="h-11 bg-green-deep px-6 text-base font-bold text-white hover:bg-green-deep/90">
                    Send reset link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
