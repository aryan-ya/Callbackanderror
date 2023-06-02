// 9. Error Handling
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
// that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
// to simulate an error, and then display an error message on the webpage.


fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Error occurred while fetching data.');
    }
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log('Error:', error.message);
  });


  