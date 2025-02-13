import { UseQueryResult } from "react-query/types/react/types";
import ArticleItem from "./ArticleItem";
import { MultipleArticlesResponse } from "../../api/Api";
import { PropsWithChildren } from "react";

function InfoWrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
  return <div className="m-x-auto m-y-2"> {children}</div>;
}

export default function ArticlesItemsList({
  queryResults: { data, isError, isLoading },
}: {
  queryResults: UseQueryResult<MultipleArticlesResponse>;
}): JSX.Element {
  if (isLoading) {
    return <InfoWrapper>Loading....</InfoWrapper>; //TODO: proper loader or skeleton loader should be done
  }
  if (isError) {
    return <InfoWrapper>Some error occured. Please try again later</InfoWrapper>; //TODO: proper error handling could be done
  }
  if (!data?.articles.length) {
    return <span>No articles</span>;
  }
  return (
    <>
      {data?.articles.map(item => (
        <ArticleItem key={item.slug} article={item} />
      ))}
    </>
  );
}
