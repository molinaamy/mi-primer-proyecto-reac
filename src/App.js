import React, { Component } from "react";
import moment from 'moment';

import { BrowserRouter as Router, Switch, Route, NavLink, Routes} from 'react-router-dom';
import PortfolioContainer from "./componentes/portfolio/porfilio-container"
import NavigationContainer from "./componentes/navigation/navigation-container";
import Home from "./componentes/pages/home";
import About from "./componentes/pages/about";
import Contact from "./componentes/pages/contact";
import Blog from "./componentes/pages/blog";
import PortfolioDetail from "./componentes/portfolio/porfolio-details";
import NoMatch from "./componentes/pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className="App">
  
        <Router>
  
        <h1>Amy Molina Portfolio </h1>
       <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
       </div>
  
          <div>
            <NavigationContainer />
  
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/about-me" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route 
              exact
               path="/portfolio/:slug"
              element={<PortfolioDetail/>} />
              <Route Component={NoMatch}/>
            </Routes>
          </div>
        </Router>
  
      
       
      </div>
    );
  }
  }