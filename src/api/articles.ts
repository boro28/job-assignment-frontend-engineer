import { api } from "./utils";
import { MultipleArticlesResponse } from "./Api";

export function getArticles(): Promise<MultipleArticlesResponse> {
  return api.get(`articles`).json<MultipleArticlesResponse>();
}
