export const logout = () => {
  window.localStorage.removeItem("jwt")
  window.localStorage.removeItem("refresh_token")
  window.location = "/"
}
