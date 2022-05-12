import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useRef} from 'react'
import Main from './components/Main';




function App() {
  const aboutRef = useRef(null); //represents main section
  const projectRef = useRef(null); //represents about section
  const contactRef = useRef(null); //represents how to use section


  ;
  return (
    <div className="App">
         <Router>
      <Routes>
        <Route exact path={["/", "/#about", "/#contact","/#projects" ]}/>
        <Route path={<Main aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
