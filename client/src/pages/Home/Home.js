import React from "react";
import Nav from "../../components/Nav"
import Slideshow from "../../components/Slideshow"
import Card from "../../components/Card"
import Login from "../../components/Login"
import Grid from 'material-ui/Grid';
import Newsfeed from '../../components/NewsFeed';


const App = () => (
  <div >
    <Nav />
    <div style={{ paddingLeft: 100, paddingRight: 100 }}>
      <Slideshow />
      <div>
        <Grid container spacing={24} alignItems="center">
          <Grid item xs={6}>
            <Card>
              <Login />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Newsfeed />
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  </div>
);

export default App