// const BACKEND_URL = 'http://localhost:4444'
// import axios from "axios";
// import validator from 'validator';

class AuthorizationServices {
  async login(username, password) {
    console.log(username, password);
    // if (username.toString().trim().length >= 4 && password.toString().trim().length >= 8) {
    //   const token = await axios
    //     .post(`${BACKEND_URL}/login`)
    //   if (token) {
    //     return token
    //   } else {
    //     console.log("server error. code: 500");
    //   }
    // } else {
    //   console.log('write all inputs');
    // }
  }
  async registration(email, username, password) {
    console.log(email, username, password);
    // if (validator.isEmail(email) && username.toString().trim().length >= 4 && password.toString().trim().length >= 8) {
    //   const token = await axios
    //     .post(`${BACKEND_URL}/login`)
    //   if (token) {
    //     return token
    //   } else {
    //     console.log("server error. code: 500");
    //   }
    // } else {
    //   console.log('write all inputs');
    // }
  }
}

export default new AuthorizationServices();