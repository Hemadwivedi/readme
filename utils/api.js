const axios = require('axios');
const dotenv = require('dotenv').config({ debug: true });
const api = {
  
  getUser(username) {
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