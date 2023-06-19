import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-use-history';

import { NavLink } from 'react-router-dom';

const NavigationComponent = (props) => {
  const history = useHistory();

  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete('https://api.devcamp.space/logout', { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.handleSuccessfulLogout();
          localStorage.removeItem('authToken'); // Remove the authentication token from local storage
          history.push('/'); // Redirect to the home page
        }
        return response.data;
      })
      .catch((error) => {
        console.log('Error signing out', error);
      });
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about-me" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
        </div>

        {props.loggedInStatus === 'LOGGED_IN' ? (
          dynamicLink('/portfolio-manager', 'Portfolio Manager')
        ) : null}
      </div>

      <div className="right-side">
        AMY MOLINA

        {props.loggedInStatus === 'LOGGED_IN' ? (
          <a onClick={handleSignOut}>
            <FontAwesomeIcon icon="sign-out-alt"/>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationComponent;







