import { api } from "./utils";
import { MultipleArticlesResponse, SingleArticleResponse } from "./Api";
import { Options } from "ky";

export function getArticles(options?: Options): Promise<MultipleArticlesResponse> {
  return api.get(`articles`, options).json<MultipleArticlesResponse>();
}

export function getArticle(slug: string): Promise<SingleArticleResponse> {
  return api.get(`articles/` + slug).json<SingleArticleResponse>();
}

export function favoriteArticle(slug: string): Promise<SingleArticleResponse> {
  return api.post(`articles/` + slug + "/favorite").json<SingleArticleResponse>();
}

export function unfavoriteArticle(slug: string): Promise<SingleArticleResponse> {
  return api.delete(`articles/` + slug + "/favorite").json<SingleArticleResponse>();
}
