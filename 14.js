/*14. Write a JavaScript program to display the reading status (i.e.
display book name, author name and reading status) of the following
books.
var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',

title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];*/
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

// Function to display reading status of books
function displayReadingStatus(books) {
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var status = book.readingStatus ? "already read" : "not read yet";
        console.log("Book: " + book.title + " by " + book.author + " - Reading Status: " + status);
    }
}

// Call the function to display reading status of books in the library
displayReadingStatus(library);