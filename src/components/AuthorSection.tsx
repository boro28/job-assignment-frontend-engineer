import { Profile } from "../api/Api";
import { ReactNode } from "react";
import AuthorPicture from "./AuthorPicture";
import { format } from "date-fns";

export default function AuthorSection({
  author: { username, image },
  createdAt,
  children,
}: {
  author: Profile;
  createdAt: string;
  children?: ReactNode;
}): JSX.Element {
  const profileLink = "/public#/profile/" + username;

  const createdDate = new Date(createdAt);
  const formatted = format(createdDate, "MMMM do"); // "January 20th"
  return (
    <div className="article-meta">
      <a href={profileLink}>
        <AuthorPicture image={image} />
      </a>
      <div className="info">
        <a href={profileLink} className="author">
          {username}
        </a>
        <span className="date">{formatted}</span>
      </div>
      {children}
    </div>
  );
}
