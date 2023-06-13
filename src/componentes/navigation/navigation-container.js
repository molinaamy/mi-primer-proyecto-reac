import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

 const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
            <NavLink to="blog" activeClassName="nav-link-active">
                Blog
            </NavLink>
            </div>
        
        );
    };

     const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", {withCredentials: true  })
        .then(Response => {
            if (Response.status === 200) {
                props.history.push("/");
                props.handeSuccessfulLogout();
            }
            return Response.data;
        }).catch(error => {
            console.log("Error signing out", error);
        });
     };



        return(

        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
         <NavLink exact to="/" activeClassName="nav-link-active">
          Home
         </NavLink>
         </div>
         </div>
         

         <div className="nav-link-wrapper">
         <NavLink to="about-me" activeClassName="nav-link-active">
             About 
         </NavLink>
         </div>

         <div className="nav-link-wrapper">
         <NavLink to="contact" activeClassName="nav-link-active">
             Contact
         </NavLink>
         </div>

         
         {props.loggedInStatus === "LOGGED_IN" ?  (
        dynamicLink ("/blog, Blog") 
         ) : null} 

           
           <div className="right-side">
            AMY MOLINA 
            </div>
            {props.loggedInStatus === "LOGGED_IN" ? (
            <a onClick={handleSignOut}>Sign Out</a> 
            ): null}
           </div>
        
        );
    }
 export default withRouter(NavigationComponent);
