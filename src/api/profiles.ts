import { ProfileResponse } from "./Api";
import { api, apiAuthorized } from "./utils";

export function getProfile(username: string): Promise<ProfileResponse> {
  return api.get(`profiles/` + username).json<ProfileResponse>();
}

export function followProfile(username: string): Promise<ProfileResponse> {
  return apiAuthorized.post(`profiles/` + username + "/follow").json<ProfileResponse>();
}

export function unfollowProfile(username: string): Promise<ProfileResponse> {
  return apiAuthorized.delete(`profiles/` + username + "/follow").json<ProfileResponse>();
}
