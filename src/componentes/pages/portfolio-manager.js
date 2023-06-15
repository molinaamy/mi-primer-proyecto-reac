import React, { Component } from 'react'
import axios from 'axios';

import PortfolioSidebarList  from "../portfolio/portfolio-sidebar-list";
import PorfolioForm from "../portfolio/portfolio-form";



export default class PortfolioManager extends Component {
    constructor() {
      super();
  
      this.state = {
        portfolioItem: []
      };
      this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
      this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }
    handleSuccessfulFormSubmission(PortfolioItem) {
        // TODO
        // update the portfolioItems state 
        // and add the 
    }
    handleFormSubmissionError(error){
        console.log("handleFormSubmissionError", error);
    }
    getPortfolioItem() {
      axios
        .get("https://jordan.devcamp.space/portfolio/portfolio_items", {
          withCredentials: true
        })
        .then(response => {
          this.setState({
            portfolioItem: [...response.data.portfolio_items]
          });
        })
        .catch(error => {
          console.log("error in getPortfolioItem", error);
        });
    }
  
    componentDidMount() {
      this.getPortfolioItem();
    }
    render() {
      return (
        <div className="portfolio-manager-wrapper">
          <div className="left-column">
            <PorfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            />
          </div>
  
          <div className="right-column">
            <PortfolioSidebarList data={this.state.portfolioItem} />
          </div>
        </div>
      );
    }
  }