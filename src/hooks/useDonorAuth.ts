import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiJson, ApiError } from "@/lib/api"
import { getDonorToken, setDonorSession } from "@/lib/donorSession"

export type DonorProfile = {
  id: string
  email: string
  name: string
  verified: boolean
  country?: string
  phone?: string
}

export function useDonorMe() {
  const token = getDonorToken()

  return useQuery({
    queryKey: ["auth", "me", token],
    queryFn: async () => {
      const data = await apiJson<{ ok: boolean; donor: DonorProfile }>("/api/auth/me", {
        method: "GET",
        token,
      })
      return data.donor
    },
    enabled: Boolean(token),
    staleTime: 60_000,
  })
}

export function useLoginMutation() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (vars: { email: string; password: string }) =>
      apiJson<{ ok: boolean; token: string; donor: DonorProfile }>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(vars),
      }),
    onSuccess: (data) => {
      setDonorSession({
        token: data.token,
        name: data.donor.name,
        email: data.donor.email,
        verified: data.donor.verified,
      })
      void qc.invalidateQueries({ queryKey: ["auth", "me"] })
    },
  })
}

export function useRegisterMutation() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (vars: {
      email: string
      password: string
      name: string
      country?: string
      phone?: string
    }) =>
      apiJson<{ ok: boolean; token: string; donor: DonorProfile }>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(vars),
      }),
    onSuccess: (data) => {
      setDonorSession({
        token: data.token,
        name: data.donor.name,
        email: data.donor.email,
        verified: data.donor.verified,
      })
      void qc.invalidateQueries({ queryKey: ["auth", "me"] })
    },
  })
}

export function isAuthApiError(e: unknown, status: number) {
  return e instanceof ApiError && e.status === status
}
