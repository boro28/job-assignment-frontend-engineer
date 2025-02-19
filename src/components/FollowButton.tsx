import { Profile, ProfileResponse, SingleArticleResponse } from "../api/Api";
import { followProfile, unfollowProfile } from "../api/profiles";
import { useIsLoggedIn } from "../storage/auth";
import { useMutation, useQueryClient } from "react-query";

export default function FollowButton({
  username,
  following,
  article,
}: Pick<Profile, "username" | "following"> & { article?: string }): JSX.Element {
  const isLoggedIn = useIsLoggedIn();
  //const [following, setFollowing] = useState<boolean>(followingProp);
  const mutationFn = following ? unfollowProfile : followProfile;
  const text = following ? "Unfollow" : "Follow";
  const queryClient = useQueryClient();
  //TODO: optimistic updates could be added
  const { mutate, isLoading } = useMutation<ProfileResponse>({
    mutationFn: async () => mutationFn(username),
    onSuccess: async updatedProfile => {
      await queryClient.invalidateQueries({
        queryKey: ["article"],
        predicate: ({ queryKey }) => queryKey[1] !== article,
      });

      queryClient.setQueryData(["profile", username], () => {
        return updatedProfile;
      });

      if (article) {
        queryClient.setQueryData(["article", article], ({ article }): SingleArticleResponse | undefined => {
          return { article: { ...article, author: updatedProfile.profile } };
        });
      }
    },
  });
  //TODO: proper loader for loading should be added
  return (
    <button
      className={"btn btn-sm btn-outline-secondary action-btn " + (following ? " active" : "")}
      onClick={() => mutate()}
      disabled={!isLoggedIn || isLoading}
    >
      <i className="ion-plus-round" />
      {/* FIXME: counter was deleted as backend don't return such data*/}
      &nbsp;{text} {username}
    </button>
  );
}
