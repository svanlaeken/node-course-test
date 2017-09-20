const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App',() => {
  var db = {
    saveUser:expect.createSpy()
  };
  app.__set__('db',db);
  
  it('should call the spies correctly',() => {
    var spy = expect.createSpy();
    spy('Seb',30);
    expect(spy).toHaveBeenCalledWith('Seb',30);
  });

  it('should call saveUser with user object',() => {
    var email = 'test@test.com';
    var password ="123abc";

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
});
