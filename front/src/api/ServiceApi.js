
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

      // fetch(ServiceApi.baseUrl + getUsersUrl, {
      //   method: 'GET'
      // }, { mode: 'cors' }).then(response => response.json())
      //   .then(function (data) {
      //     resolve(data);

      //   })
      //   .catch(function (error) {
      //     console.error('Error:', error);
      //     reject(error);
      //   });
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

      // fetch(ServiceApi.baseUrl + getassignuser, {
      //   method: 'GET'
      // }, { mode: 'cors' }).then(response => response.json())
      //   .then(function (data) {
      //     resolve(data);

      //   })
      //   .catch(function (error) {
      //     console.error('Error:', error);
      //     reject(error);
      //   });
    });
  }

  static assignUser(user) {
    return new Promise((resolve, reject) => {

      const assignuser = '/assignuser';
      console.log(user);
      console.log({ userId: user._id });
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
      // fetch(ServiceApi.baseUrl+assignuser, {
      //   method: 'POST',
      // //   headers: {
      // //     "Content-Type": "application/json",
      // //     "Access-Control-Allow-Origin" : "*"
      // //     // "Content-Type": "application/x-www-form-urlencoded",
      // // },
      // body : JSON.stringify({userId: user._id}),
      // mode: 'cors',
      // }).then(response => response.json())
      //   .then(function(data) 
      //   {             
      //       resolve(data);

      //   })
      //   .catch(function (error) {
      //     console.error('in eror');
      //     console.error('Error:', error);
      //     reject(error);
      //   });
    });
  }

}

