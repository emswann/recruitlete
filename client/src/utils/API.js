import axios from "axios";

export default {
  getArticles: () => axios.get("/api/articles"),
  
  getSchools: token => axios.get("/api/schools", {headers: {Authorization: `bearer ${token}`}}),

  login: userData => axios.post("/auth/login",  userData),

  signup: userData => axios.post("/auth/signup", userData),

  getAthlete: (token) => axios.get(`/api/athlete`, {headers: {Authorization: `bearer ${token}`}}),

  updateAthlete: (token) => axios.put(`/api/athlete`, {headers: {Authorization: `bearer ${token}`}}),

  deleteAthlete: (token) => axios.delete(`/api/athlete`, {headers: {Authorization: `bearer ${token}`}}),

  getCoach: (token) => axios.get(`/api/coach`, {headers: {Authorization: `bearer ${token}`}}),

  updateCoach: (token) => axios.put(`/api/coach`, {headers: {Authorization: `bearer ${token}`}}),

  deleteCoach: (token) => axios.delete(`/api/coach`, {headers: {Authorization: `bearer ${token}`}}),


};
