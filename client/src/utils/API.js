import axios from "axios";

export default {

  getArticles: function() {
    return axios.get("/api/articles");
  }
};