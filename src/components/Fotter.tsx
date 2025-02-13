import { NavLink } from "react-router-dom";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="container">
        <NavLink to="/home" className="logo-font">
          conduit
        </NavLink>
        <span className="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
  );
}
