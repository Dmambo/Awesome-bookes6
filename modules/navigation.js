/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-alert */

import {book, addBook, contact} from "./variables.js";

const navigation = (() => {
    book.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('added-book').style.display = 'flex';
        document.getElementById('book-form').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
        document.querySelector('.booksawe').style.display = 'flex';
        document.querySelector('.newbook').style.display = 'none';
        book.classList.add('active');
        addBook.classList.remove('active');
        contact.classList.remove('active');
    });

    addBook.addEventListener('click', (e) => {
        e.preventDefault();
    document.getElementById('added-book').style.display = 'none';
    document.getElementById('book-form').style.display = 'flex';
    document.getElementById('contact').style.display = 'none';
    document.querySelector('.booksawe').style.display = 'none';
    document.querySelector('.newbook').style.display = 'flex';
    addBook.classList.add('active');
    book.classList.remove('active');
    contact.classList.remove('active');
    });

    contact.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('added-book').style.display = 'none';
        document.getElementById('book-form').style.display = 'none';
        document.getElementById('contact').style.display = 'flex';
        document.querySelector('.booksawe').style.display = 'none';
        document.querySelector('.newbook').style.display = 'none';
        contact.classList.add('active');
        book.classList.remove('active');
        addBook.classList.remove('active');
    });
});

export default navigation;