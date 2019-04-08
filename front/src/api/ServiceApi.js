
export default class ServiceApi {
static baseUrl = 'http://localhost:3301';
    static getUsers() {
      return new Promise((resolve, reject) => {      
       
        const getUsersUrl = '/users';
               
        fetch(ServiceApi.baseUrl+getUsersUrl, {
          method: 'GET'
        },{mode: 'cors'}).then(response => response.json())
          .then(function(data) 
          {             
              resolve(data);
                        
          })
          .catch(function (error) {
            console.error('Error:', error);
            reject(error);
          });
      });
    }

    static getAssingedUsers() {
      return new Promise((resolve, reject) => {      
       
        const getassignuser = '/assignuser';
               
        fetch(ServiceApi.baseUrl+getassignuser, {
          method: 'GET'
        },{mode: 'cors'}).then(response => response.json())
          .then(function(data) 
          {             
              resolve(data);
                        
          })
          .catch(function (error) {
            console.error('Error:', error);
            reject(error);
          });
      });
    }

    static assignUser(user) {
      return new Promise((resolve, reject) => {      
       
        const assignuser = '/assignuser';
               console.log(user);
               console.log({userId: user._id});
        fetch(ServiceApi.baseUrl+assignuser, {
          method: 'POST',
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin" : "*"
        //     // "Content-Type": "application/x-www-form-urlencoded",
        // },
        body : JSON.stringify({user: user._id})
        },{mode: 'cors'}).then(response => response.json())
          .then(function(data) 
          {             
              resolve(data);
                        
          })
          .catch(function (error) {
            console.error('in eror');
            console.error('Error:', error);
            reject(error);
          });
      });
    }

  }
  
  