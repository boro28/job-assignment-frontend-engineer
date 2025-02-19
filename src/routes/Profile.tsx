import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProfile } from "../api/profiles";
import AuthorPicture from "../components/AuthorPicture";
import FollowButton from "../components/FollowButton";
import { getArticles } from "../api/articles";
import ArticlesItemsList from "../components/ArticlesItemsList";
import InfoWrapper from "../components/InfoWrapper";
type ProfileParams = {
  username: string;
};

export default function Profile(): JSX.Element {
  const { username: usernameParam } = useParams<ProfileParams>();
  const { data, isLoading } = useQuery({
    queryKey: ["profile", usernameParam],
    queryFn: () => getProfile(usernameParam),
  });

  const articlesQuery = useQuery({
    queryKey: ["articles", usernameParam],
    queryFn: () => getArticles({ searchParams: { author: usernameParam } }),
  });
  if (isLoading || !data) {
    return <InfoWrapper>Loading</InfoWrapper>;
  }
  const { username, image, bio, following } = data?.profile;
  return (
    <>
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <AuthorPicture image={image} className="user-img" />
                <h4>{username}</h4>
                <p>{bio}</p>
                <FollowButton username={username} following={following} />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active">My Articles</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Favorited Articles</a>
                  </li>
                </ul>
              </div>
              <ArticlesItemsList queryResults={articlesQuery} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
