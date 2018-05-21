import axios from "axios";

export default {
  getArticles: () => axios.get(`/api/articles`),
  
  getSchools: token => axios.get(`/api/schools`, {headers: {Authorization: `bearer ${token}`}}),

  login: userData => axios.post(`/auth/login`,  userData),

  signup: userData => axios.post(`/auth/signup`, userData),

  getAthlete: token => axios.get(`/api/athlete`, {headers: {Authorization: `bearer ${token}`}}),

  updateAthlete: (token, athleteDoc) => axios.put(`/api/athlete`, athleteDoc, {headers: {Authorization: `bearer ${token}`}}),

  getCoach: token => axios.get(`/api/coach`, {headers: {Authorization: `bearer ${token}`}}),

  updateCoach: (token, coachDoc) => axios.put(`/api/coach`, coachDoc, {headers: {Authorization: `bearer ${token}`}}),

  getChatrooms: token => axios.get(`/api/chatroom`, {headers: {Authorization: `bearer ${token}`}}),

  getChatroom: (token, room) => axios.get(`/api/chatroom/${room}`, {headers: {Authorization: `bearer ${token}`}}),

  addChatroomUser: (token, chatroomDoc) => axios.put(`/api/chatroom/${chatroomDoc.room}`, {username: chatroomDoc.username}, {headers: {Authorization: `bearer ${token}`}}),

  deleteChatroomUser: (token, chatroomDoc) => axios.delete(`/api/chatroom/${chatroomDoc.room}/${chatroomDoc.username}`, {headers: {Authorization: `bearer ${token}`}})
};
