import { useEffect, useState } from "react";

const TOKEN_KEY = "token";
const LOCAL_STORAGE_EVENT = "localStorageChange";

function dispatchLocalStorageChangeEvent(): void {
  window.dispatchEvent(new Event(LOCAL_STORAGE_EVENT));
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
  dispatchLocalStorageChangeEvent();
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken(): void {
  localStorage.removeItem(TOKEN_KEY);
  dispatchLocalStorageChangeEvent();
}

export function isLoggedIn(): boolean {
  return Boolean(getToken());
}

export function useIsLoggedIn(): boolean {
  const [, forceUpdate] = useState(0); // Dummy state to trigger re-render

  useEffect(() => {
    const handleStorageChange = () => {
      forceUpdate(prev => prev + 1);
    };

    // Listen for localStorage changes across tabs
    window.addEventListener("storage", handleStorageChange);

    // Listen for custom event (for same tab updates)
    window.addEventListener(LOCAL_STORAGE_EVENT, handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(LOCAL_STORAGE_EVENT, handleStorageChange);
    };
  }, []);

  return isLoggedIn();
}
