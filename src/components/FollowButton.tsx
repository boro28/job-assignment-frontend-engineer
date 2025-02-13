export default function FollowButton({ username }: { username: string }): JSX.Element {
  //TODO: add functionality
  return (
    <button className="btn btn-sm btn-outline-secondary action-btn">
      <i className="ion-plus-round" />
      {/* FIXME: counter was deleted as backend don't return such data*/}
      &nbsp; Follow {username}
    </button>
  );
}
