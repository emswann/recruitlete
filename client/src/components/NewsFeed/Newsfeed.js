import React, { Component } from "react";
import API from "../../utils/API";

class Newsfeed extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
    .then(res =>
      this.setState({ articles: res.data }))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        {this.state.articles.length ? (
          <div className="row">
            <div className="offset-md-4 col-md-4">
              {this.state.articles.map((article, index) => (
                <div className="row" key={index}>
                  <h3>article {index}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  };
}

export default Newsfeed;
