const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.should();
chai.use(chaiHttp);

describe("Test Main route from API", () => {
    describe("Test GET route ", () => {
      it("Should return an message home route", (done) => {
  
        chai
          .request(app)
          .get("/")
          .end((err, response) => {
            response.should.have.status(200); 
            
            response.body.should.be.an("Object").and.have.property("message");
  
            done();
          });
      });
    });
  });
  
  describe("Test GET route for return a number in full ", () => {
    describe("Test GET/:id route", () => {
      it("Should return a number in full", (done) => {
        chai
          .request(app)
          .get("/:id")
          .end((err, response) => {
            response.should.have.status(200);
  
            response.body.should.be.a("Object");
  
            done();
          });
      });
    });
  });