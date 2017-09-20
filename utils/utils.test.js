const expect = require('expect');


const utils = require('./utils');

describe('utils',() => {
    describe('#add',() => {
      it('should add two numbers',() => {
          var res = utils.add(33,11);
          expect(res).toBe(44).toBeA('number');
      });



    })
  it('should asyncAdd two numbers',(done) => {
    utils.asyncAdd(4,3,(sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
  });
  it('should asyncsquare a number',() => {
    utils.asyncSquare(3,(square) =>{
      expect(square).toBe(9).toBeA('number');
      done();
    });
  });

  it('should square a number',() => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  });
});



// it('should expect some values',() => {
//   // expect(12).toNotBe(11);
//   // expect({name:'seb'}).toNotEqual({name:'Seb'});
//   // expect([2,3,4]).toExclude(1
//   expect({
//           name:'seb',
//           age:30
//       }).toInclude({
//           age:30
//       });
// });
//
// it('should verify first and lastname are set',() => {
//   var user ={"city":"Gembloux", "age":30};
//   var res = utils.setName(user,"Sébastien VanLaeken");
//   expect(res).toInclude({
//     "firstName":"Sébastien",
//     "lastName":"VanLaeken"
//   });
// })
