import React, { Component } from "react";
import Slideshow from "../../components/Slideshow";
import SimpleCard from "../../components/SimpleCard";
import Newsfeed from "../../components/NewsFeed";

class Home extends Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Slideshow />
            <div className="col-md-6">
              <SimpleCard>
                <Newsfeed />
              </SimpleCard>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;
