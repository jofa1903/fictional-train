import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ backgroundColor: "cornflowerblue", minHeight: "100vh" }}>
      <h2>About Section</h2>
      <li>
        <Link to="/#contact">Scroll To Main</Link>
      </li>
      <li>
        <Link to="/#projects">How To Use</Link>
      </li>
    </div>
  );
};

export default About;
