const TOKEN_KEY = "token";

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken(): void {
  localStorage.removeItem("token");
}

export function isLoggedIn(): boolean {
  return Boolean(getToken());
}
