import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import pic from "./assets/photo.jpg"
import Research from "./Research/Research"
import About from "./About/About"
import Professional from "./Projects/Projects"
import Education from "./Education/Education" 

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGoodreads } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faGoodreads)

function App() {
  return (
    <Router>
    <div className="App">

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"/>
      <div className="header-content">
          <div className="headshot-wrap">
            <img className="headshot"
              src={pic}
              alt="headshot"
            />
          </div> 
          <div className="main-text">
            <div className = "leftMain">
              <div className="name">Simran Arora </div>

              {/* <div className="header location">
                  <div className="iconBoxWrapper">
                    <div className="iconBox">
                      <i className="fas fa-map-marker-alt iconinside"></i>
                    </div> 
                    </div>
                  <div id="locationtag">Bay Area, CA</div>
              </div> */}

              <div className="LinksContainer">
                <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=rGRsWH8AAAAJ&sortby=pubdate" class="fas fa-graduation-cap" style={{"text-decoration":"none"}}>  </a> 
                <a href="https://github.com/simran-arora" class="fab fa-github" style={{"text-decoration":"none"}}>  </a> 
              </div>
            </div>

            <div className="v1">
            <div className="navBar">
              <nav>
                <NavLink to="/about" className="nav">About</NavLink><br/>
                <NavLink to="/research" className="nav">Research</NavLink><br/>
                <NavLink to="/education" className="nav">Teaching</NavLink><br/>
                <NavLink to="/professional" className="nav">Background</NavLink><br/>
              </nav>
            </div>
            </div>
        </div>
      </div>

      <div className="Content-Container">
        <div>
          <Routes>
          <Route exact path='/' element={<About/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/research" element={<Research/>}/>
          <Route path="/professional" element={<Professional/>}/>
          <Route path="/education" element={<Education/>}/>
          </Routes>
        </div>
      </div>


    </div>    
    </Router>
  );
}




export default App;
