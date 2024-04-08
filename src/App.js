import logo from './logo.svg';
import './App.css';
import Nav from './nav';
// import{Routes,Route,BrowserRouter}from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Skill from "./skill";
import Project from "./project";
// import Resume from "./resume";
import Contact from "./contact";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
