
import axios from 'axios';

export default class ServiceApi {
  static baseUrl = 'http://localhost:3301';
  static getUsers() {
    return new Promise((resolve, reject) => {

      const getUsersUrl = '/users';
      axios.get(ServiceApi.baseUrl + getUsersUrl)
        .then(function (response) {
          if (response.data != null)
            resolve(response.data);
          resolve([]);
        }).catch(function (error) {
          console.log(error);
          reject(error);
        });

     
    });
  }

  static getAssingedUsers() {
    return new Promise((resolve, reject) => {

      const getassignuser = '/assignuser';
      axios.get(ServiceApi.baseUrl + getassignuser)
        .then(function (response) {
          if (response.data != null)
            resolve(response.data);
          resolve([]);
        }).catch(function (error) {
          console.log(error);
          reject(error);
        });

      
    });
  }

  static assignUser(user) {
    return new Promise((resolve, reject) => {

      const assignuser = '/assignuser';
     
      axios.post(ServiceApi.baseUrl + assignuser, { userId: user._id })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        })
        .then(function () {
          // always executed
        });
     
    });
  }

}

