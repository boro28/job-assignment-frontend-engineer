import { Profile } from "../api/Api";
import { useState } from "react";
import { followProfile } from "../api/profiles";
import { useIsLoggedIn } from "../storage/auth";

export default function FollowButton({
  username,
  following: followingProp,
}: Pick<Profile, "username" | "following">): JSX.Element {
  const isLoggedIn = useIsLoggedIn();
  const [following, setFollowing] = useState<boolean>(followingProp);
  return (
    <button
      className={"btn btn-sm btn-outline-secondary action-btn " + (following ? " active" : "")}
      onClick={() => followProfile(username).then(() => setFollowing(true))}
    >
      <i className="ion-plus-round" />
      {/* FIXME: counter was deleted as backend don't return such data*/}
      &nbsp; Follow {username}
    </button>
  );
}
