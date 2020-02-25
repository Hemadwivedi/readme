var axios=require('axios');
const api = {
  getUser(username) {
   return axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.data;
      });
  }
};

module.exports = api;
