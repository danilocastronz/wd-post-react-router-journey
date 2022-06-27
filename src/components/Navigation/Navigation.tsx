import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <div
    style={{
      margin: "20px",
    }}
  >
    <nav>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "pink" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "pink" : "",
          };
        }}
        to="/project"
      >
        Projects
      </NavLink>
      {" | "}
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "pink" : "",
          };
        }}
        to="/about"
      >
        About
      </NavLink>
      {" | "}
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "pink" : "",
          };
        }}
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  </div>
);
