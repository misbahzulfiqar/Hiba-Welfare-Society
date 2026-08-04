/** Same-document navigation that updates {@link App} path state (pushState does not fire popstate). */
export function navigateTo(path: string) {
  window.history.pushState({}, "", path)
  window.dispatchEvent(new Event("hfw:navigate"))
}
