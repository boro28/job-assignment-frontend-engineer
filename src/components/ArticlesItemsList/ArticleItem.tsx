import { Article } from "../../api/Api";
import AuthorSection from "../AuthorSection";

export default function ArticleItem({
  article: { title, description, author, favoritesCount, createdAt, slug },
}: {
  article: Article;
}): JSX.Element {
  return (
    <div className="article-preview">
      <AuthorSection author={author} createdAt={createdAt}>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" />
          {" " + favoritesCount}
        </button>
      </AuthorSection>
      <a href={"/public#/" + slug} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
}
