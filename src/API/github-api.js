import axios from "axios";
import Cookies from "js-cookie";
// import router from "@/router/router";

const API = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    // Accept: "application/json",
    Accept: "application/vnd.github+json",
  },
});

// 確認是否有 token
// 設置請求(request)的攔截器
API.interceptors.request.use(
  (config) => {
    let access_token = Cookies.get("token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 設置回應(response)的攔截器
API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const token = Cookies.get("token");

    if (error.response) {
      switch (error.response.status) {
        case 400:
          alert(error.response.data.message);
          break;
        case 401:
          alert(error.response.data.message);
          Cookies.remove("token");
          break;
        case 403:
          alert(error.response.data.message);
          break;
        case 404:
          alert(error.response.data.message);
          break;
        case 500:
          alert(error.response.data.message);
          break;
        default:
          console.log(error.message);
          alert(error.message);
      }
    }
    if (!window.navigator.onLine) {
      alert("網路不穩，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

export default {
  async GET(url, arg) {
    try {
      const res = await API.get(url, {
        ...arg,
      });
      return res.data;
    } catch (res) {
      return Promise.reject(res.response.data);
    }
  },
  async POST(url, data, config) {
    try {
      const res = await API.post(url, data, config);
      return res.data;
    } catch (res) {
      return Promise.reject(res.response.data);
    }
  },
  async PATCH(url, data, config) {
    try {
      const res = await API.patch(url, data, config);
      return res;
    } catch (res) {
      return Promise.reject(res.response.data);
    }
  },
};
