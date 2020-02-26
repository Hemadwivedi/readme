const axios = require('axios');
const dotenv = require('dotenv').config();

const api = {
  getUser(username) {
    console.log(`About to fetch user details for ${username}`);
    return axios({
        url: `https://api.github.com/users/${username}`,
        method: "GET",
        headers:{
          'Authorization': `token ${process.env.API_TOKEN}`
        },
      })
      .then((response) => {
        return response.data;
      });
  }
};

module.exports = api;