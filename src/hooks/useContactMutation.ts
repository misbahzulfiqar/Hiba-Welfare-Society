import { useMutation } from "@tanstack/react-query"
import { apiJson } from "@/lib/api"

export function useContactMutation() {
  return useMutation({
    mutationFn: (vars: { name: string; email: string; subject: string; message: string }) =>
      apiJson<{ ok: boolean; id: string }>("/api/contact", {
        method: "POST",
        body: JSON.stringify(vars),
      }),
  })
}
