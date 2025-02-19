import { useQuery } from "react-query";
import { getArticle } from "../api/articles";
import { useParams } from "react-router-dom";
import AuthorSection from "../components/AuthorSection";
import InfoWrapper from "../components/InfoWrapper";
import FollowButton from "../components/FollowButton";
type ArticleParams = {
  slug: string;
};

export default function Article(): JSX.Element {
  const { slug } = useParams<ArticleParams>();
  const { data, isLoading } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticle(slug),
  });
  if (isLoading || !data) {
    return <InfoWrapper className="article-page container">Loading...</InfoWrapper>;
  }
  const { author, createdAt, favoritesCount, body } = data?.article || {};
  const { username, following } = author || {};

  const authorSection = (
    <AuthorSection author={author} createdAt={createdAt}>
      <FollowButton username={username} following={following} article={slug} />
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart" />
        &nbsp; Favorite Post <span className="counter">({favoritesCount})</span>
      </button>
    </AuthorSection>
  );
  return (
    <>
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>How to build webapps that scale</h1>
            {authorSection}
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">{body}</div>
          </div>

          <hr />

          <div className="article-actions">{authorSection}</div>

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <form className="card comment-form">
                <div className="card-block">
                  <textarea className="form-control" placeholder="Write a comment..." rows={3} />
                </div>
                <div className="card-footer">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  <button className="btn btn-sm btn-primary">Post Comment</button>
                </div>
              </form>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="/public#/profile/jacobschmidt" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="/public#/profile/jacobschmidt" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="/public#/profile/jacobschmidt" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="/public#/profile/jacobschmidt" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                  <span className="mod-options">
                    <i className="ion-edit" />
                    <i className="ion-trash-a" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
