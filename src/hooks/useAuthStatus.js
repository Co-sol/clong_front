export function useAuthStatus() {
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  const hasGroup = Boolean(localStorage.getItem("groupId"));
  return { isLoggedIn, hasGroup };
}
