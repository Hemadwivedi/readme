const axios = require('axios');
const dotenv = require('dotenv').config();

const api = {
  getUser(username) {
    console.log(`About to fetch user details for ${username}`);
    return axios({
        url: `https://api.github.com/users/${username}`,
        method: "GET",
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.CLIENT_PASS
        }
      })
      .then((response) => {
        return response.data;
      });
  }
};

module.exports = api;