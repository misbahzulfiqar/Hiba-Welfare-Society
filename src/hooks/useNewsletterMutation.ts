import { useMutation } from "@tanstack/react-query"
import { apiJson } from "@/lib/api"

export function useNewsletterMutation() {
  return useMutation({
    mutationFn: (vars: { email: string }) =>
      apiJson<{ ok: boolean }>("/api/newsletter/subscribe", {
        method: "POST",
        body: JSON.stringify(vars),
      }),
  })
}
