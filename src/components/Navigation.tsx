import { NavLink } from "react-router-dom";
import { useIsLoggedIn } from "../storage/auth";

export default function Navigation(): JSX.Element {
  const isLoggedIn = useIsLoggedIn();
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/home">
          conduit
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" class when you're on that page" */}
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <NavLink className="nav-link" to="/logout">
                Sign out
              </NavLink>
            ) : (
              <NavLink className="nav-link" to="/login">
                Sign in
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
