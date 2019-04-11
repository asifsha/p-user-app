# p-user-app

## Explanation
I used node js as backend as a credit card was required to use Azure Functions.
### API Endpoints
/users - get - returns all unassinged users
/assignuser - get - returns all assinged users
/assignuser - post - assign a user 

### curl commmands
 curl http://localhost:3301/users //get all unassinged users

 curl http://localhost:3301/assignuser //get all assinged users

 curl -i -X POST -H "Content-Type:application/json" http://localhost:3301/assignuser/ -d '{"userId":"5caa4bd6b5f41ed363433445"}' //assign a user, you may need to change id


## How to use
mongoimport --db dbName --collection users --file user-profiles-5000.json --jsonArray
start the mongo db server

git clone https://github.com/asifsha/p-user-app.git

open terminal
cd [foldername]/front npm install
to start app
npm start

to test
npm test

open another terminal


cd [foldername]/backend npm install
to start server
npm start
to test
npm test


