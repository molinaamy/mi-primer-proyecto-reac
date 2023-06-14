import React from "react";

const portfolioSidebarList = (props) => {
    const portfolioList = props.data.map(ProtfolioItem => {
        return (
            <div>
                <h1>{ProtfolioItem.name}</h1>
                <h2>{ProtfolioItem.id}</h2>
            </div>
        );
    }); 

    return <div>{portfolioList}</div>;
};

export default portfolioSidebarList;