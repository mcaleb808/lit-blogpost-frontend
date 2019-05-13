import axios from "axios";
import store from "../store";

const {
  user: { token }
} = store.getState().user;

const http = axios.create({
  baseURL: "https://lit-blog.herokuapp.com/api/v1",
  headers: {
    Authorization: token || localStorage.getItem("token") || undefined
  }
});

export default http;
