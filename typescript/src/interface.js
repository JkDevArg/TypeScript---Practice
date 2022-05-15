"use strict";
const book = {
    id: 1,
    title: 'Book Title',
    author: 'Book Author'
};
const books = [];
function getBook() {
    return { id: 1, title: 'Book Title', author: 'Book Author' };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: 'Book Title',
    author: 'Book Author',
    coAuthor: 'Book coAuthor'
};
createBook(newBook);
