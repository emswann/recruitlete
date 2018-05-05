import axios from "axios";

export default {
  getArticles: () => axios.get("/api/articles"),

  login: userData => axios.post("/auth/login",  userData),

  signup: userData => axios.post("/auth/signup", userData),

  athletes: token => axios.get("/api/athletes", {headers: {Authorization: `bearer ${token}`}}),

  coaches: token => axios.get("/api/coaches", {headers: {Authorization: `bearer ${token}`}})
};