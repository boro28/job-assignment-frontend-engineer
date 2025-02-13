import ky from "ky";

const baseUrl = "http://localhost:3000/api"; //TODO: change it to ENV for proper usage

export const api = ky.extend({
  prefixUrl: baseUrl,
});