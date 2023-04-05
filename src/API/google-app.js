import axios from "axios";

const getGithubToken = async (code) => {
  const response = await axios({
    method: "post",
    // url: "https://script.google.com/macros/s/AKfycbxQrzmbLdLO7f1qhfszyYygTY5oN2bSwQdmv-ewV9Ml2E1j4SHFA8LM-_m3SOjqbOIgRA/exec",
    url: "https://script.google.com/macros/s/AKfycbz3n3t0pRS7XCeuSOBJUSE1OgB4T8EG0b28f_aCEAFfuLTUIcJRuL2ZiV0T0W1L-lYl/exec",
    data: JSON.stringify({
      code,
      redirect_uri: import.meta.env.VITE_REDIRECT_URL,
      mode: import.meta.env.MODE,
    }),
    headers: {
      "Content-Type": "text/plain",
    },
  });

  return JSON.parse(response.data);
};

export { getGithubToken };
