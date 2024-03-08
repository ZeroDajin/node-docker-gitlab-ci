var express = require('express')
var router = express.Router()
router.get('/Resolving-JavaScript-Promises',function(req, res, next){
    let promise1 = Promise.resolve(5);
    let promise2 = 44;
    let promise3 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 100, 'foo');
    });
  
    Promise.all([promise1, promise2, promise3]).then(function(values) {
     console.log(values);
    });
})
  router.get('/Creating-async-Function',function(req, res, next){  
    const msg = async function() { //Async Function Expression
      const msg = await helloWorld();
      console.log('Message:', msg);
    }
    
    const msg1 = async () => { //Async Arrow Function
      const msg = await helloWorld();
      console.log('Message:', msg);
    }
    
    msg(); // Message: Hello World! <-- after 2 seconds
    msg1(); // Message: Hello World! <-- after 2 seconds
  })
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  module.exports = router;