import ky from "ky";
import { getToken } from "../storage/auth";

const baseUrl = "http://localhost:3000/api"; //TODO: change it to ENV

export const api = ky.extend({
  prefixUrl: baseUrl,
  hooks: {
    beforeRequest: [
      (request: Request) => {
        const token = getToken();
        if (token) {
          request.headers.set("Authorization", "Token: " + token);
        }
      },
    ],
  },
});
