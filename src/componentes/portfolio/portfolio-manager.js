import React, { Component } from 'react'
import axios from 'axios';

import portfolioSidebarList from "./portfolio-sidebar-list";

export default class portfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };
    }
    getPortfolioItems () {
        axios.get("https://jordan.devcamp.space/portfolio/portfolio_items", {
            withCredentials: true
        })
        .then(response => {
            this.setState({
                portfolioItems:[...response.data.portfolio_items]
            });
        })
        .catch(error => {
            console.log("error in getPortfolioItems", error);
        });
    }
    componentDidMount(){
        this.getPortfolioItems();
    }
  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
       <h1> portfolio from...</h1>
        </div>

        <div className="right-column">
        <portfolioSidebarList data={this.state.portfolioSidebarList}/>
        </div>
        </div>
    );
  }
}
