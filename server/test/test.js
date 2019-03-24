var chai = require('chai');
var chaiHttp = require ('chai-http');
var app = require ('../app');

chai.use(chaiHttp);
chai.should();

describe('Customers', () => {
  describe('GET/', () => {
    it('should get a list of al customers', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          done();
        });
    });

    it('should get a single customer', (done) => {
      const id = "5c9756896a447a28d9291720";

      chai.request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          done();
        });
    });

  });
});