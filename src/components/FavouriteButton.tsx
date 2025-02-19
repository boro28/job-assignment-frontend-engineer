import { Article } from "../api/Api";
import { useMutation, useQueryClient } from "react-query";
import { favoriteArticle, unfavoriteArticle } from "../api/articles";
import { useIsLoggedIn } from "../storage/auth";

export default function FavouriteButton({
  favoritesCount,
  favorited,
  slug,
  children,
  className,
}: Pick<Article, "favoritesCount" | "favorited" | "slug"> & {
  children?: React.ReactNode;
  className?: string;
}): JSX.Element {
  const isLoggedIn = useIsLoggedIn();
  //TODO: optimistic updates could be added
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: !favorited ? favoriteArticle : unfavoriteArticle,
    onSuccess: async updatedArticle => {
      queryClient.setQueryData(["article", slug], () => {
        return updatedArticle;
      });
      //TODO: add proper invalidation
    },
  });
  //TODO: proper loader for loading should be added
  //TODo: add library for className formating
  return (
    <button
      className={"btn btn-sm btn-outline-primary" + (favorited ? " active" : "") + (className ? " " + className : "")}
      onClick={() => mutate(slug)}
      disabled={!isLoggedIn || isLoading}
    >
      <i className="ion-heart" />
      {children}&nbsp;<span className="counter">({favoritesCount})</span>
    </button>
  );
}
