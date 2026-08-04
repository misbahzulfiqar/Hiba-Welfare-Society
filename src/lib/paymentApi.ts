import { getApiBaseUrl } from "@/lib/api"

/** @deprecated use getApiBaseUrl from @/lib/api */
export const getPaymentApiBaseUrl = getApiBaseUrl

const DEV_API_DOWN_HINT =
  "Start the backend from the repo root: npm run dev:server — or run web + server together: npm run dev:site."

function apiUnreachableMessage(cause: unknown): string {
  if (cause instanceof TypeError) {
    return `Cannot reach the donation API. ${DEV_API_DOWN_HINT}`
  }
  return cause instanceof Error ? cause.message : "Request failed"
}

function withDevProxyHint(dataError: string | undefined, statusText: string): string {
  const fromApi = typeof dataError === "string" && dataError.trim()
  if (fromApi) return fromApi
  const base = statusText.trim() || "Request failed"
  if (import.meta.env.DEV) {
    return `${base}. ${DEV_API_DOWN_HINT}`
  }
  return base
}

export type PaymentRecordBody = {
  status: string
  merchantName: string
  order: string
  orderDescription: string
  donationAmount: number
  bankCharges: number
  totalPayable: number
  gateway: string
  donationFrequency: string
  donor?: unknown
  cartLines?: unknown
  cardLast4?: string
  remarks?: string
}

export async function recordPayment(body: PaymentRecordBody): Promise<{ ok: boolean; id?: string; error?: string }> {
  const base = getApiBaseUrl()
  const url = `${base}/api/payments`
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const data = (await res.json().catch(() => ({}))) as { ok?: boolean; id?: string; error?: string }
  if (!res.ok) {
    return { ok: false, error: data.error ?? res.statusText }
  }
  return { ok: true, id: data.id }
}

export type CreateEasypaisaDonationResult =
  | {
      ok: true
      orderRef: string
      amountPkr: number
      status: "bank_transfer_initiated"
      bankDetails: {
        bankName: string
        accountTitle: string
        accountNumber: string
        iban: string
        swiftCode: string
        branchName: string
        branchCode: string
      }
      instructions?: string[]
    }
  | { ok: false; error?: string }

/** Creates donation order and returns Faysal Bank transfer details + reference. */
export async function createEasypaisaDonation(body: Record<string, unknown>): Promise<CreateEasypaisaDonationResult> {
  const base = getApiBaseUrl()
  let res: Response
  try {
    res = await fetch(`${base}/api/create-donation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
  } catch (e) {
    return { ok: false, error: apiUnreachableMessage(e) }
  }
  const data = (await res.json().catch(() => ({}))) as {
    ok?: boolean
    orderRef?: string
    amountPkr?: number
    status?: "bank_transfer_initiated"
    bankDetails?: {
      bankName?: string
      accountTitle?: string
      accountNumber?: string
      iban?: string
      swiftCode?: string
      branchName?: string
      branchCode?: string
    }
    instructions?: string[]
    error?: string
  }
  if (!res.ok) {
    return { ok: false, error: withDevProxyHint(data.error, res.statusText) }
  }
  if (
    typeof data.orderRef !== "string" ||
    !data.orderRef ||
    typeof data.amountPkr !== "number" ||
    !data.bankDetails ||
    typeof data.bankDetails.bankName !== "string" ||
    typeof data.bankDetails.accountTitle !== "string" ||
    typeof data.bankDetails.accountNumber !== "string" ||
    typeof data.bankDetails.iban !== "string" ||
    typeof data.bankDetails.swiftCode !== "string" ||
    typeof data.bankDetails.branchName !== "string" ||
    typeof data.bankDetails.branchCode !== "string"
  ) {
    return {
      ok: false,
      error: typeof data.error === "string" && data.error.trim() ? data.error : "Invalid response from payment server",
    }
  }
  return {
    ok: true,
    orderRef: data.orderRef,
    amountPkr: data.amountPkr,
    status: "bank_transfer_initiated",
    bankDetails: {
      bankName: data.bankDetails.bankName,
      accountTitle: data.bankDetails.accountTitle,
      accountNumber: data.bankDetails.accountNumber,
      iban: data.bankDetails.iban,
      swiftCode: data.bankDetails.swiftCode,
      branchName: data.bankDetails.branchName,
      branchCode: data.bankDetails.branchCode,
    },
    instructions: Array.isArray(data.instructions) ? data.instructions.filter((x): x is string => typeof x === "string") : undefined,
  }
}

export type VerifyEasypaisaDonationResult =
  | {
      ok: true
      status: "success"
      orderRef: string
      amountPkr: number
      donorName: string
      transactionId: string
      alreadyVerified?: boolean
    }
  | {
      ok: true
      status: "pending"
      orderRef: string
      amountPkr: number
      donorName: string
      transactionId: string
    }
  | { ok: true; status: "failed"; orderRef: string; detail?: string }
  | { ok: false; error?: string }

export async function submitBankTransferProof(body: {
  orderRef: string
  transactionId: string
  senderName?: string
  senderPhone?: string
  notes?: string
}): Promise<{ ok: boolean; error?: string }> {
  const base = getApiBaseUrl()
  let res: Response
  try {
    res = await fetch(`${base}/api/submit-bank-transfer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
  } catch (e) {
    return { ok: false, error: apiUnreachableMessage(e) }
  }
  const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
  if (!res.ok) return { ok: false, error: withDevProxyHint(data.error, res.statusText) }
  return { ok: true }
}

export async function verifyEasypaisaDonation(orderRef: string): Promise<VerifyEasypaisaDonationResult> {
  const base = getApiBaseUrl()
  let res: Response
  try {
    res = await fetch(`${base}/api/verify-donation/${encodeURIComponent(orderRef)}`)
  } catch (e) {
    return { ok: false, error: apiUnreachableMessage(e) }
  }
  const data = (await res.json().catch(() => ({}))) as {
    ok?: boolean
    status?: string
    orderRef?: string
    amountPkr?: number
    donorName?: string
    transactionId?: string
    alreadyVerified?: boolean
    detail?: string
    error?: string
  }
  if (!res.ok) {
    return { ok: false, error: withDevProxyHint(data.error, res.statusText) }
  }
  if (data.status === "failed") {
    return {
      ok: true,
      status: "failed",
      orderRef: typeof data.orderRef === "string" ? data.orderRef : orderRef,
      detail: data.detail,
    }
  }
  if (data.status === "pending") {
    return {
      ok: true,
      status: "pending",
      orderRef: typeof data.orderRef === "string" ? data.orderRef : orderRef,
      amountPkr: typeof data.amountPkr === "number" ? data.amountPkr : 0,
      donorName: typeof data.donorName === "string" ? data.donorName : "",
      transactionId: typeof data.transactionId === "string" ? data.transactionId : "",
    }
  }
  if (data.status === "success") {
    return {
      ok: true,
      status: "success",
      orderRef: typeof data.orderRef === "string" ? data.orderRef : orderRef,
      amountPkr: typeof data.amountPkr === "number" ? data.amountPkr : 0,
      donorName: typeof data.donorName === "string" ? data.donorName : "",
      transactionId: typeof data.transactionId === "string" ? data.transactionId : "",
      alreadyVerified: data.alreadyVerified === true,
    }
  }
  return { ok: false, error: "Unexpected verification response" }
}
