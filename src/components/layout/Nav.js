// Import Styles
import "../../styles/components/layout/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <ul className="lu_nav">
        <li className="li_nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Inicio
          </NavLink>
        </li>
        <li className="li_nav">
          <NavLink
            to="/paintings"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Pinturas
          </NavLink>
        </li>
        <li className="li_nav">
          <NavLink
            to="/poems"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Poemas
          </NavLink>
        </li>
        <li className="li_nav">
          <NavLink
            to="/biography"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Biografía
          </NavLink>
        </li>
        <li className="li_nav">
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Blog
          </NavLink>
        </li>
        <li className="li_nav">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
