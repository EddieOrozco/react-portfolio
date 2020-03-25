import React, { Component } from "react";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: "1",
          title: "Resturaunt",
          imgUrl: "add img",
          linkUrl: "to resturaunt page"
        },
        {
          id: "2",
          title: "Cars",
          imgUrl: "add img",
          linkUrl: "to cars page"
        },
        {
          id: "3",
          title: "Ecommerce",
          imgUrl: "add img",
          linkUrl: "to e-commers page"
        },
        {
          id: "1",
          title: "Digital Agency",
          imgUrl: "add img",
          linkUrl: "to Agency page"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Portfolio</h1>

        <h4>title</h4>
        <h4>img</h4>
        <h4>btn w/ page</h4>
        <h4>btn w/ modal</h4>
      </div>
    );
  }
}

export default Portfolio;
