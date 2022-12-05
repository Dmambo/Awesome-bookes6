/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-alert */

import {titleInput, authorInput, btnInput, addedBooks} from './variables.js';
export class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

export class Store {
    static getBooks() {
         let books;
         if (localStorage.getItem('books') === null) {
             books = [];
         } else {
             books = JSON.parse(localStorage.getItem('books'));
         }
 
         return books;
     }
 
     static addBook(book) {
         const books = Store.getBooks();
         books.push(book);
         localStorage.setItem('books', JSON.stringify(books));
     }
 
    static removeBook(author) {
         const books = Store.getBooks();
 
         books.forEach((book, index) => {
             if (book.author === title) {
                 books.splice(index, 1);
             }
         });
 
         localStorage.setItem('books', JSON.stringify(books));
     }
 }
 // UI class: handle UI tasks
 
 export class UI {
     static displayBooks() {
         const storedBook = Store.getBooks();
 
         const books = storedBook;
 
         books.forEach((book) => UI.addBookToList(book));
     }
 
     static addBookToList(book) {
         const list = document.querySelector('#added-book');
 
         const row = document.createElement('tr');
 
         row.innerHTML = `
            <div class="book-container">
                 <div class="book">
                     "${book.title}" by
                     ${book.author}
                 </div>
                     <div class="delete-btn">
                     <a href="#" class="delete">remove</a>
                     </div>
             </div>`;
         list.appendChild(row);
     }
 
     static deleteBook(el) {
     if (el.classList.contains('delete')) {
         el.parentElement.parentElement.parentElement.remove();
     }
 }
 
     static clearFields() {
     titleInput.value = '';
     authorInput.value = '';
     }
 
     static displayList() {
         const list = document.querySelector('#added-book');
         list.style.display = 'flex';
     }
 }
 





