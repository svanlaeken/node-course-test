const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server',() => {
  it('should return HelloWorld response',(done) => {
    request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error:'Page not found'
        });
      })
      .end(done);
  });

  it('should contains my user',(done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name:'Caroline Herman',
          age:28
        })
      })
      .end(done)
  });
})
