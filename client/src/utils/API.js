import axios from "axios";

export default {
  getArticles: () => axios.get("/api/articles"),

  login: userData => axios.post("/auth/login",  userData),

  signUp: userData => axios.post('/auth/signup', userData),

  dashboard: token => axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}})
};