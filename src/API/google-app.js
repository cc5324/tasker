import axios from "axios";

const getGithubToken = async (code) => {
  const response = await axios({
    method: "post",
    url: "https://script.google.com/macros/s/AKfycbxQrzmbLdLO7f1qhfszyYygTY5oN2bSwQdmv-ewV9Ml2E1j4SHFA8LM-_m3SOjqbOIgRA/exec",
    data: JSON.stringify({
      code,
      redirect_uri: import.meta.env.VITE_REDIRECT_URL,
    }),
    headers: {
      "Content-Type": "text/plain",
    },
  });

  return JSON.parse(response.data);
};

export { getGithubToken };
