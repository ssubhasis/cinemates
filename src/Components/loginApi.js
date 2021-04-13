import axios from 'axios'

export const userLogin = async ({ userId, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const body = {"userId":userId,
                    "password":password}
        // searchResults = []
        const API_URL = "https://teampolaris.web.illinois.edu/user-login"
        axios.post(API_URL, body)
        .then(response => { if (userId === response.data.userId && password === response.data.userPassword) {
          resolve(response.data);
        } else {
          reject();}
      }).catch((error) => {reject();});
      }, 3000);
    });
  };