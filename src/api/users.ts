import { UserResponse } from "./Api";
import { api } from "./utils";
import { HTTPError } from "ky";

export async function login(email: string, password: string): Promise<UserResponse> {
  try {
    const data = await api.post("users/login", { json: { user: { email, password } } }).json<UserResponse>();
    localStorage.setItem("token", data.user.token);

    return data;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorJson = await error.response.json(); // Get error JSON
      if (error.response.status === 401) {
        throw new Error("Invalid email or password.");
      }
      throw new Error(errorJson.message);
    }
    throw new Error("Please try again later.");
  }
}

export function logout(): null {
  localStorage.removeItem("token");
  return null;
}
export function isLoggedIn(): boolean {
  return Boolean(localStorage.getItem("token"));
}
