export class BookApp {
    constructor() {
      const books = localStorage.getItem('books');
      this.books = books ? JSON.parse(books) : [];
      this.bookList = document.getElementById('bookList');
      this.addButton = document.getElementById('add');
      this.titleInput = document.getElementById('title');
      this.authorInput = document.getElementById('author');
      this.addButton.addEventListener('click', () => this.addBook());
      this.displayBooks();
    }
  
    addBook = () => {
      const title = this.titleInput.value;
      const author = this.authorInput.value;
      if (title && author) {
        const book = { title, author };
        this.books.push(book);
        localStorage.setItem('books', JSON.stringify(this.books));
        this.displayBook(book);
        this.titleInput.value = '';
        this.authorInput.value = '';
      }
    };
  
    removeBook = (id) => {
      this.books = this.books.filter((book) => book.id !== id);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    };
  
    displayBook = (book) => {
      const li = document.createElement('li');
      const id = `book-${Math.random().toString(36).substr(2, 9)}`; // create a new unique id for each new book using a randomly generated string
      book.id = id;
      li.setAttribute('id', id);
      li.textContent = `${book.title} by ${book.author}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(id);
        li.remove();
      });
      li.appendChild(removeButton);
      this.bookList.appendChild(li);
    };
  
    displayBooks = () => {
      this.bookList.innerHTML = '';
      this.books.forEach((book) => {
        this.displayBook(book);
      });
    };
  }
  