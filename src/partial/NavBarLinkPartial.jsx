import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const NavBarLinkPartial = ({ label, link }) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link navbar-collapse"
        to={link}
        isActive={(match, location) => match && match.isExact}
      >
        {label}
      </NavLink>
    </li>
  );
};
export default NavBarLinkPartial;
