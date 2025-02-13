export default function AuthorPicture({ image }: { image: string }): JSX.Element {
  return <img src={image || "https://i.imgur.com/hepj9ZS.png"} alt="profile picture" />;
}
