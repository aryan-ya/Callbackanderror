// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.


function arrangeBooks(books, callback) {
    var titles = books.map(function(book) {
      return book.title;
    });
    
    titles.sort();
    
    callback(titles);
  }
  

  var bookList = [
    { title: "Book C", author: "Author C", year: 2005 },
    { title: "Book A", author: "Author A", year: 1998 },
    { title: "Book B", author: "Author B", year: 2010 }
  ];
  
  function logTitles(titles) {
    console.log("Titles in alphabetical order:");
    for (var i = 0; i < titles.length; i++) {
      console.log(titles[i]);
    }
  }
  
  arrangeBooks(bookList, logTitles);



  
  