import axios from "axios";

const http = axios.create({
  baseURL: process.env.URL,
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

export default http;
