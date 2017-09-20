const express = require('express');

var app = express();

app.get('/',(req,res) => {
  res.status(404).send({error:'Page not found',name:'TodoApp v1.0'});
});

app.get('/users',(req,res)=>{
  var users = [{
    name:'Caroline Herman',
    age:28
  }, {
    name:'Emilie Deleuze',
    age:30
  },{
    name:'Sébastien VanLaeken',
    age:30
  }];
  res.send(users);
})

app.listen(3000,() => {
  console.log('Application is listening on port 3000');
});

module.exports.app = app;
