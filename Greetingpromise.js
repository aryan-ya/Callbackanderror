// 5. Greeting Promise.
// You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

function greetWithName(name) {
    return new Promise(function(resolve, reject) {
      if (typeof name === 'string') {
        var greeting = "Hello, " + name + "!";
        resolve(greeting);
      } else {
        reject("Invalid input. Please provide a valid name.");
      }
    });
  }
  
  
  var name = "Aryan";
  
  greetWithName(name)
    .then(function(greeting) {
      console.log(greeting);
    })
    .catch(function(error) {
      console.log(error);
    });




    
  