export type DonorSession = {
  /** JWT from POST /api/auth/login or /api/auth/register */
  token: string
  name: string
  email: string
  verified: boolean
}

const SESSION_KEY = "hiba_welfare_donor_session"
const PROFILES_KEY = "hiba_welfare_donor_profiles"

function readProfiles(): Record<string, { name: string }> {
  try {
    const raw = localStorage.getItem(PROFILES_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    return parsed && typeof parsed === "object" ? (parsed as Record<string, { name: string }>) : {}
  } catch {
    return {}
  }
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export function formatFallbackNameFromEmail(email: string): string {
  const local = normalizeEmail(email).split("@")[0] ?? "Donor"
  const spaced = local.replace(/[._-]+/g, " ").trim()
  if (!spaced) return "Donor"
  return spaced.replace(/\b\w/g, (c) => c.toUpperCase())
}

export function getDonorSession(): DonorSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<DonorSession>
    if (!parsed?.email || !parsed?.name || typeof parsed.token !== "string" || !parsed.token) {
      localStorage.removeItem(SESSION_KEY)
      return null
    }
    return {
      token: parsed.token,
      name: parsed.name,
      email: parsed.email,
      verified: parsed.verified !== false,
    }
  } catch {
    return null
  }
}

export function getDonorToken(): string | null {
  return getDonorSession()?.token ?? null
}

export function setDonorSession(session: DonorSession) {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      token: session.token,
      name: session.name.trim(),
      email: session.email.trim(),
      verified: session.verified,
    }),
  )
}

export function clearDonorSession() {
  localStorage.removeItem(SESSION_KEY)
}

export function rememberDonorProfile(email: string, name: string) {
  const profiles = readProfiles()
  profiles[normalizeEmail(email)] = { name: name.trim() }
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
}

export function getStoredDonorName(email: string): string | null {
  const profiles = readProfiles()
  const entry = profiles[normalizeEmail(email)]
  return entry?.name?.trim() ? entry.name.trim() : null
}
