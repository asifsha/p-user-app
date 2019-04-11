const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('API endpoint /users /assignuser', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - List all users
  it('should return all users', function() {
    return chai.request(app)
      .get('/users')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;        
        expect(res.body).to.be.an('array');
      });
  });
  

  // GET - List all users
  it('should return all assigned users', function() {
    return chai.request(app)
      .get('/assignuser')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;          
      });
  });


  // POST - assign an user
  it('should assign an user', function() {
    return chai.request(app)
      .post('/assignuser')
      .send({
        userId: '5cad0456d3e54510d6ebcf3e'
      })
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  
});