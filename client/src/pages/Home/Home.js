import React from "react";
import Nav from "../../components/Nav";
import Slideshow from "../../components/Slideshow";
import Card from "../../components/Card"
import Login from "../../components/Login"
//import Newsfeed from '../../components/NewsFeed';

const Home = () => (
  <div className="container">
    <div className="row">
      <Nav />
    </div>
    <div className="row">
      <div className="col">
        <Slideshow />
<div className="row">
<div className="col-md-6">
            <Card style={{padding:20}}>
              <Login />
            </Card>
</div>
</div>
<div className="col-md-6">
            <Card>
              {/* <Newsfeed /> */}
            </Card>
</div>
      </div>
    </div>
  </div>
);

export default Home;
