import axios from "axios";

export default {
  getArticles: () => axios.get("/api/articles"),

  login: userData => axios.post("/auth/login",  userData),

  signup: userData => axios.post("/auth/signup", userData),

  getAthlete: (token, id) => axios.get(`/api/athletes/${id}`, {headers: {Authorization: `bearer ${token}`}}),

  getCoach: (token, id) => axios.get(`/api/coaches/${id}`, {headers: {Authorization: `bearer ${token}`}})
};