import React, { Component } from "react";
import moment from 'moment';

import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import PortfolioContainer from "./componentes/portfolio/portfolio-container";
import NavigationContainer from "./componentes/navigation/navigation-container";
import Home from "./componentes/pages/home";
import About from "./componentes/pages/about";
import Contact from "./componentes/pages/contact";
import Blog from "./componentes/pages/blog";
import PortfolioDetail from "./componentes/portfolio/porfolio-details";
import Auth from "./componentes/pages/auth";
import NoMatch from "./componentes/pages/no-match";
import "./style/main.scss";
import axios from "axios";
import portfoliomanager from "./componentes/portfolio/portfolio-manager";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this. handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  authorizedPages(){
    return [
    <Route path="/portfolio-manager" Component={portfoliomanager} />];
    
  }


  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;



        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <div className="container">
       <Router>
        <div>
          <NavigationContainer 
          loggedInStatus={this.state.loggedInStatus} 
          handleSuccessfulLogout={this.handleSuccessfulLogout}
          />

          <Routes>
            <Route exact path="/" element={<Home/>}/>
       
            <Route
            path="/auth"
            element={
              <Auth
                {...this.props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                
              />
            }
/>

            <Route path="/about-me" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
            {this.state.loggedInStatus === "LOGGED_IN" ? 
                this.authorizedPages()
               : null}




            <Route exact path="/portfolio/:slug" element={<PortfolioDetail/>} />
            <Route path="/:slug" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
      </div>
    );
  }
}