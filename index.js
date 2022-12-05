import navigation from './modules/navigation.js';
import  {titleInput, authorInput, btnInput, addedBooks} from './modules/variables.js';
import { Book,Store, UI } from './modules/book.js';
// import Book from './constructor.js';

// make navigation active
navigation();

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
btnInput.addEventListener('click', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = titleInput.value;
    const author = authorInput.value;

    // Validate
    if (title === '' || author === '') {
        alert('Please fill in all fields');
        // ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Instatiate book
        const book = new Book(title, author);
        // Add Book to store
        Store.addBook(book);
        // Add Book to UI
        UI.addBookToList(book);
                // show success
        alert('Book Added!', 'success');
        // clear fields
        UI.clearFields();
    }
});

// Event: Remove a Book
addedBooks.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove book from UI
    UI.deleteBook(e.target);

     // Remove book from store
     Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
          // show message
    alert('Book Removed!', 'success');
    e.preventDefault();
});