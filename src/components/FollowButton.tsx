import { Profile } from "../api/Api";
import { useState } from "react";
import { followProfile, unfollowProfile } from "../api/profiles";
import { useIsLoggedIn } from "../storage/auth";

export default function FollowButton({
  username,
  following: followingProp,
}: Pick<Profile, "username" | "following">): JSX.Element {
  const isLoggedIn = useIsLoggedIn();
  const [following, setFollowing] = useState<boolean>(followingProp);
  const onClickFunc = following ? unfollowProfile : followProfile;
  const text = following ? "Unfollow" : "Follow";
  return (
    <button
      className={"btn btn-sm btn-outline-secondary action-btn " + (following ? " active" : "")}
      onClick={() => onClickFunc(username).then(() => setFollowing(!following))}
      disabled={!isLoggedIn}
    >
      <i className="ion-plus-round" />
      {/* FIXME: counter was deleted as backend don't return such data*/}
      &nbsp;{text} {username}
    </button>
  );
}
