import {titleInput, authorInput, btnInput, addedBooks} from './variables.js';
// import Book from './constructor.js';

// // Store class: handles storage
// export class Store {
//     getBooks = () => {
//         let books;
//         if (localStorage.getItem('books') === null) {
//             books = [];
//         }
//         else {
//             books = JSON.parse(localStorage.getItem('books'));
//         }
//     }

//     addedBooks = (books) => {
//         books.forEach(book => {
//             const ui = new UI();
//             ui.addBookToList(book);
//             localStorage.setItem('books', JSON.stringify(books));
//         })
    
//     }
//     // remove book from local storage
//     removeBook = (title) => {
//         const books = Store.getBooks();
//         books.forEach((book, index) => {
//             if (book.title === title) {
//                 books.splice(index, 1);
//             }
//         });
        
//     }
// }

// // UI class: handle UI tasks
// export class UI {

    
//     addBookToList = (book) => {
//         const list = document.getElementById('book-list');
//         // create tr element
//         const row = document.createElement('tr');
//         // insert cols
//         row.innerHTML = `
//         <div class="book-container">
//         <div class="book">
//             "${book.title}" by
//             ${book.author}
//         </div>
//             <div class="delete-btn">
//             <a href="#" class="delete">remove</a>
//             </div>
//     </div>`;
//         list.appendChild(row);
//     }
//     showAlert = (message, className) => {
//         // create div
//         const div = document.createElement('div');
//         // add classes
//         div.className = `alert ${className}`;
//         // add text
//         div.appendChild(document.createTextNode(message));
//         // get parent
//         const container = document.querySelector('.container');
//         // get form
//         const form = document.querySelector('#book-form');
//         // insert alert
//         container.insertBefore(div, form);
//         // timeout after 3 sec
//         setTimeout(function(){
//             document.querySelector('.alert').remove();
//         }, 3000);
//     }
//     deleteBook = (target) => {
//         if (target.className === 'delete') {
//             target.parentElement.parentElement.remove();
//         }
//     }
//     clearFields = () => {
//         titleInput.value = '';
//         authorInput.value = '';
//     }
// };
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
 





