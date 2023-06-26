import axios from "axios";
import React, { Component } from "react"
import { useParams } from "react-router-dom";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super( props);

    this.state = {
      PortfolioItem:{}
    }
  }
componentWillUnmount(){
  this.getPortfolioItem();
}
  getPortfolioItem() {
    
    axios.get(
        `https://molina.devcamp.space/portfolio/portfolio_items/${
          this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          PortfolioItem: response.data.Portfolio_item
        })
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }
  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url +")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }
    const logoStyles = {
      with: "200px"
    }
    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles} >
          <img src={logo_url} />
        </div>
    
        <div className="portfolio-detail-description-wrapper">
          <div classNaem="description">{description}</div>
        </div>
    
        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}
