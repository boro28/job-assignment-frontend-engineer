import { useEffect } from "react";
import { logout } from "../api/users";
import { useHistory } from "react-router-dom";

export default function Logout(): JSX.Element {
  const history = useHistory();
  useEffect(() => {
    logout();
    history.push("/home");
  }, [history]);
  return <div>Logging out</div>;
}
