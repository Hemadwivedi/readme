var axios=require('axios');
const api = {
  getUser(username) {
    console.log(username);
    axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log(response)
        console.log(response.data.avatar_url);
        console.log(response.data.repos_url);
      });
  }
};

module.exports = api;

//https://api.github.com/users/hemadwivedi