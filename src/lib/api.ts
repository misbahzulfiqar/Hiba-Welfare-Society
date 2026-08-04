/**
 * API base URL. In dev, Vite proxies /api → server (see vite.config).
 * In production set VITE_API_URL to your API origin (no trailing slash).
 */
export function getApiBaseUrl() {
  const env = import.meta.env.VITE_API_URL
  if (typeof env === "string" && env.trim()) return env.replace(/\/$/, "")
  return ""
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public body: unknown,
  ) {
    const msg =
      typeof body === "object" &&
      body !== null &&
      "error" in body &&
      typeof (body as { error: unknown }).error === "string"
        ? (body as { error: string }).error
        : `Request failed (${status})`
    super(msg)
    this.name = "ApiError"
  }
}

export async function apiJson<T>(path: string, init?: RequestInit & { token?: string | null }): Promise<T> {
  const base = getApiBaseUrl()
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`
  const headers = new Headers(init?.headers)
  const { token, ...rest } = init ?? {}
  if (token) headers.set("Authorization", `Bearer ${token}`)
  const hasBody = rest.body !== undefined && rest.body !== null
  if (hasBody && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  const res = await fetch(url, { ...rest, headers })
  const data = (await res.json().catch(() => ({}))) as T
  if (!res.ok) throw new ApiError(res.status, data)
  return data
}
