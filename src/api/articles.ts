import { api } from "./utils";
import { MultipleArticlesResponse, SingleArticleResponse } from "./Api";

export function getArticles(): Promise<MultipleArticlesResponse> {
  return api.get(`articles`).json<MultipleArticlesResponse>();
}

export function getArticle(slug: string): Promise<SingleArticleResponse> {
  return api.get(`articles/` + slug).json<SingleArticleResponse>();
}
