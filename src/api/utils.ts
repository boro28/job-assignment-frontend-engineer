import ky from "ky";
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
          //TODO: handel missing token properly
          throw new Error("Token is missing");
        }
        request.headers.set("Authorization", "Token: " + token);
      },
    ],
  },
});
