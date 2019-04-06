
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
  }
  
  