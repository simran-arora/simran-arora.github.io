import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import pic from "./assets/photo.jpg"
import Research from "./Research/Research"
import About from "./About/About"
import Professional from "./Projects/Projects"
import Education from "./Education/Education"
import Personal from "./Personal/Personal"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
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
              <div className="name">Simran Arora</div>

              <div className="header location">
                  <div className="iconBoxWrapper">
                    <div className="iconBox">
                      <i className="fas fa-map-marker-alt iconinside"></i>
                    </div>
                    </div>
                  <div id="locationtag">Bay Area | Philadelphia</div>
              </div>

              <div className="LinksContainer">
                <a href="https://www.strava.com/athletes/44286294" class="fab fa-strava" style={{"text-decoration":"none"}}>  </a> 
                <a href="https://www.goodreads.com/user/show/12754020-simran-arora" class="fab fa-goodreads" style={{"text-decoration":"none"}}>  </a> 
                <a href="https://www.linkedin.com/in/simran-arora/" class="fab fa-linkedin" style={{"text-decoration":"none"}}>  </a>
              </div>
            </div>

            <div className="v1">
            <div className="navBar">
              <nav>
                <NavLink to="/about" className="nav">About</NavLink><br/>
                <NavLink to="/research" className="nav">Research</NavLink><br/>
                <NavLink to="/professional" className="nav">Professional</NavLink><br/>
                <NavLink to="/education" className="nav">Education</NavLink><br/>
                <NavLink to="/personal" className="nav">Personal</NavLink><br/>
              </nav>
            </div>
            </div>
        </div>
      </div>

      <div className="Content-Container">
        <div>
          <Switch>
            <Route exact path="/">
              <About/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/professional">
              <Professional />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/personal">
              <Personal />
            </Route>
          </Switch>
        </div>
      </div>


    </div>    
    </Router>
  );
}




export default App;
