const { default: axios } = require("axios");
const { APIURL } = require("./serverConstant");

const securedApi = axios.create({
  baseURL: APIURL.authenticationUrl,
});

const userSecuredApi = axios.create({
  baseURL: APIURL.userUrl,
});

userSecuredApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  config.headers.accessToken = token;
  return config;
});

securedApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  config.headers.accessToken = token;
  return config;
});

const flightPublicApi = axios.create({
  baseURL: APIURL.flightUrl,
});

const publicApi = axios.create({
  baseURL: APIURL.authenticationUrl,
});

module.exports = {
  securedApi,
  publicApi,
  userSecuredApi,
  flightPublicApi,
};
