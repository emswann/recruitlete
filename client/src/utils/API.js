import axios from "axios";

export default {
  getArticles: () => axios.get("/api/articles"),
  
  getSchools: token => axios.get("/api/schools", {headers: {Authorization: `bearer ${token}`}}),

  login: userData => axios.post("/auth/login",  userData),

  signup: userData => axios.post("/auth/signup", userData),

  getAthlete: token => axios.get(`/api/athlete`, {headers: {Authorization: `bearer ${token}`}}),

  updateAthlete: (token, athleteDoc) => axios.put(`/api/athlete`, athleteDoc, {headers: {Authorization: `bearer ${token}`}}),

  getCoach: token => axios.get(`/api/coach`, {headers: {Authorization: `bearer ${token}`}}),

  updateCoach: (token, coachDoc) => axios.put(`/api/coach`, coachDoc, {headers: {Authorization: `bearer ${token}`}})
};
