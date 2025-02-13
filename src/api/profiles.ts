import { ProfileResponse } from "./Api";
import { api } from "./utils";

export function getProfile(username: string): Promise<ProfileResponse> {
  return api.get(`profiles/` + username).json<ProfileResponse>();
}
