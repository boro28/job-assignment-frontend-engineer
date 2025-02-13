import { api } from "./utils";
import { MultipleArticlesResponse, SingleArticleResponse } from "./Api";
import { Options } from "ky";

export function getArticles(options?: Options): Promise<MultipleArticlesResponse> {
  return api.get(`articles`, options).json<MultipleArticlesResponse>();
}

export function getArticle(slug: string): Promise<SingleArticleResponse> {
  return api.get(`articles/` + slug).json<SingleArticleResponse>();
}
