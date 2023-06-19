import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import axios from 'axios';


export default class PortfolioContainer extends Component {
constructor() {
  super();
  this.state = {
    pageTitle: "Welcome to my portafolio",
    isLoading: false,
    data: []
    
  };

  
  this.handleFilter = this.handleFilter.bind(this);
  this.getProtfolioItems= this.getProtfolioItems.bind(this);
}

handleFilter(filter) {
this.setState({
  data: this.state.data.filter(item => {
    return item.category === filter;
  })
});
}
getProtfolioItems()  {
  axios.get('https://molina.devcamp.space/portfolio/portfolio_items')
  .then (response =>   {
    console.log("response data", response);
    this.setState({
      data: response.data.portfolio_items
    });
  })
  .catch (error => {
    console.log(error);
  });
}

PortfolioItem() {
  return this.state.data.map(item => {
    return (  <PortfolioItem key={item.id} item={item}/>
     );
  });
}

componentDidMount() {
  this.getProtfolioItems();
}

  render() {
   if (this.state.isLoading){
    return <div>Loading...</div>;
   }
    
   

   return(
     <div className="portfolio-items-wrapper">
    <button className="btn" onClick={() =>this.handleFilter("eCommerce")}>eCommerce</button>
    <button className="btn" onClick={() =>this.handleFilter("Scheduling")}>Scheduling</button>
    <button className="btn" onClick={() =>this.handleFilter("Enterprise")}>Enterprise</button>
      {this.PortfolioItem()}</div>
   );
  }
}