export function getToken(): string | null {
  return localStorage.getItem('token')
}
export function setToken(token: string) {
  localStorage.setItem("token", token)
}
