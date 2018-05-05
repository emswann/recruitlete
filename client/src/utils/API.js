import axios from "axios";

export default {
  getArticles: token => axios.get("/api/articles", {headers: {Authorization: `bearer ${token}`}}),

  getSchools: token => axios.get("/api/schools", {headers: {Authorization: `bearer ${token}`}}),

  login: userData => axios.post("/auth/login",  userData),

  signup: userData => axios.post("/auth/signup", userData),

  getAthlete: (token, id) => axios.get(`/api/athletes/${id}`, {headers: {Authorization: `bearer ${token}`}}),

  getCoach: (token, id) => axios.get(`/api/coaches/${id}`, {headers: {Authorization: `bearer ${token}`}})
};