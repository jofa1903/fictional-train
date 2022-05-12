import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={{backgroundColor:"coral", minHeight:"100vh"}}>
      <h2>How to Use Section</h2>
      <li><Link to="/#about">Sc oll To Main</Link></li>
      <li><Link to="/#projects">Abut</Link></li>
    </div>
  );
};

export default Contact;