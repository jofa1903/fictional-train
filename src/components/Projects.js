import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div style={{ backgroundColor: "lightyellow", minHeight: "100vh" }}>
      <h2>Main</h2>
      <li>
        <Link to="/#about">About</Link>
      </li>
      <li>
        <Link to="/#contact">How To Use</Link>
      </li>
    </div>
  );
};

export default Projects;
