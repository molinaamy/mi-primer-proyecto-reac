import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Routes} from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "./helpers/icons";



import PortfolioContainer from "./componentes/portfolio/portfolio-container";
import NavigationContainer from "./componentes/navigation/navigation-container";
import Home from "./componentes/pages/home";
import About from "./componentes/pages/about";
import Contact from "./componentes/pages/contact";
import Blog from "./componentes/pages/blog";
import BlogDetail from "./componentes/pages/blog-detail";
import PortfolioDetail from "./componentes/portfolio/portfolio-detail";
import Auth from "./componentes/pages/auth";
import NoMatch from "./componentes/pages/no-match";
import "./style/main.scss";
import PortfolioManager from "./componentes/pages/portfolio-manager";




export default class App extends Component {
  constructor(props) {
    super(props);
    Icons();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  componentDidMount() {
    // Check if an authentication token exists in local storage
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.setState({ loggedInStatus: "LOGGED_IN" });
    }
  
    //Check the login status
    this.checkLoginStatus();
  }

  handleSuccessfulLogin(authToken) {
    // Store the authentication token in local storage
    localStorage.setItem('authToken', authToken);
  
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
    // Remove the authentication token from local storage
    localStorage.removeItem('authToken');

    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", { withCredentials: true })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        if (loggedIn) {
          this.setState({ loggedInStatus: "LOGGED_IN" });
        } else {
          this.setState({ loggedInStatus: "NOT_LOGGED_IN" }, () => {
            localStorage.removeItem('authToken');
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  

  authorizedPages() {
    return [
       <Route key="portfolio-manage" path="/portfolio-manager" element={<PortfolioManager />} />
    ];
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
  
            <h2>{this.state.loggedInStatus}</h2>
  
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/auth"
                element={
                  <Auth
                    {...this.props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                    history={this.props.history}
                  />
                }
              />
              <Route path="/about-me" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route
                path="/blog"
                render={props => (
                  <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />


              <Route path="/b/:slug" element={BlogDetail} />
              {this.state.loggedInStatus === "LOGGED_IN" ? (
                this.authorizedPages()
              ) : null}
              <Route
                exact
                path="/portfolio/:slug"
                element={PortfolioDetail}
              />

              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
              <Route exact path="/portfolio/:slug" element={<PortfolioDetail/>} />
              { <Route path="/:slug" element={<NoMatch />} /> }
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}  