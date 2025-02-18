import ky, { BeforeRequestHook } from "ky";
import { getToken } from "../storage/auth";

const baseUrl = "http://localhost:3000/api"; //TODO: change it to ENV

export const api = ky.extend({
  prefixUrl: baseUrl,
});

export const apiAuthorized = api.extend({
  hooks: {
    beforeRequest: [
      (request: Request) => {
        const token = getToken();
        if (!token) {
          throw new Error("Token is missing");
        }
        request.headers.set("Authorization", "Token: " + token);
      },
    ],
  },
});
