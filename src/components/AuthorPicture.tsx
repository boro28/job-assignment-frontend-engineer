export default function AuthorPicture({ image, className }: { className?: string; image: string }): JSX.Element {
  return <img src={image || "https://i.imgur.com/hepj9ZS.png"} alt="profile picture" className={className} />;
}
