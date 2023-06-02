// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.


function doubleArrayElements(arr, callback) {
    var doubledArray = [];
    
    for (var i = 0; i < arr.length; i++) {
      doubledArray.push(callback(arr[i]));
    }
    
    return doubledArray;
  }
  
  
  var numbers = [1, 2, 3, 4, 5];
  
  function double(num) {
    return num * 2;
  }
  
  var doubledNumbers = doubleArrayElements(numbers, double);
  console.log(doubledNumbers);

  