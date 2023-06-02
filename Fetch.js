// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.


function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }
  

  fetchData();
  

  