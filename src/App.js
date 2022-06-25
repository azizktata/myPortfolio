
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Contactus from './components/Contactus/Contactus';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Project from './components/Projects/Project';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
          <Route exact path='/' element={<> <NavBar/> <Home /> </>} /> 
      </Routes>
      <Routes>
        <Route  exact path='/aboutme' element={ <> <NavBar/> <Aboutme/>  </>}/>  
      </Routes>
      <Routes>
        <Route  exact path='/project' element={ <> <NavBar/> <Project/>  </>}/>  
      </Routes>
      <Routes>
        <Route  exact path='/contactus' element={ <> <NavBar/> <Contactus/>  </>}/>  
      </Routes>
    </div>
    </Router>
  );
}

export default App;
