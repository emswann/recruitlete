import React, { Component } from "react";
import Slideshow from "../../components/Slideshow";
import Newsfeed from "../../components/NewsFeed";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false,}
    this.props.toggleAuthenticateStatus();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Slideshow />
            <Newsfeed />
          </div>
        </div>
      </div>
    )
  }
};
