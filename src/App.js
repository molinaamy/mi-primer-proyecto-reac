import React, { Component } from "react";
import moment from 'moment';

import { BrowserRouter as Router, Switch, Route, NavLink, Routes} from 'react-router-dom';
import PortfolioContainer from "./componentes/portfolio/portfolio-container"
import NavigationContainer from "./componentes/navigation/navigation-container";
import Home from "./componentes/pages/home";
import About from "./componentes/pages/about";
import Contact from "./componentes/pages/contact";
import Blog from "./componentes/pages/blog";
import PortfolioDetail from "./componentes/portfolio/porfolio-details";
import Auth from "./componentes/pages/auth";
import NoMatch from "./componentes/pages/no-match";
import "./style/main.scss";

export default class App extends Component {
constructor(props) {
super(props);

this.state = {
  loggedInstatus: "NOT_LOGGED_IN"
};

this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
}

handleSuccessfulLogin(){
  this.state({
    loggedInstatus: "LOGGED_IN"
  })
}

handleUnSuccessfulLogin(){
  this.state({
    loggedInstatus: "NOT_LOGGED_IN"
  })
}


  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />

            <h2>{this.state. loggedInstatus}</h2>
            <Routes>
              <Route exact path="/" element={<Home/>}/>

              <Route 
              path="/auth" 
              element={<Auth/>}
              render={props => (
                <Auth 
                 {...props}
                 handleSuccessfulLogin={this.handleSuccessfulLogin}
                 handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                 />
              )}
              />

              <Route path="/about-me" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route 
              exact
               path="/portfolio/:slug"
               element={<PortfolioDetail/>} />
              <Route element={NoMatch}/>
            </Routes>
          </div>
        </Router>    
      </div>
    );
  }
  }