import { Link } from "react-router-dom";

export const Navigation = () => (
  <div
    style={{
      margin: "20px",
    }}
  >
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/project">Projects</Link>
      {" | "}
      <Link to="/about">About</Link>
      {" | "}
      <Link to="/contact">Contact</Link>
    </nav>
  </div>
);
