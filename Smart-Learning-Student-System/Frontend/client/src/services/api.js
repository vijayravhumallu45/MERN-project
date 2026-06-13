import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-project-a19j.onrender.com/api",
});

export default API;