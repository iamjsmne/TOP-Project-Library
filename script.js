class Book { //connected
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    getBook() {
        console.log(`You have entered:
            Title: ${this.title}
            Author: ${this.author}
            Pages: ${this.pages}
            Status: ${this.status}`);
    }
}
const Bookshelf = (() => {
    let index = 0;
    const library = [];
    const bookInfo = () => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('number-of-pages').valueAsNumber;
        const readStatus = document.getElementById('status').value;
        const book = new Book(title, author, pages, readStatus);
        return book;
    }
    const addBook = (book) => {
        library.push(book);
        createBookCard(index, book);
        index++;
    }
    const getBooks = () => {
        library.forEach((book) => console.log(book.getBook()));
    }

    return { library, bookInfo, addBook, getBooks }

})();

const DisplayController = (() => {
    const newBookBtn = document.getElementById('new-book');
    const closeBtn = document.getElementById('close-modal');
    const submitBtn = document.getElementById('submit');
    const addBookInfo = document.getElementById('add-book-info');
    
    newBookBtn.addEventListener('click', () => {
        //open up the modal
        modal.showModal();  
    })
    //close modal
    closeBtn.addEventListener('click', () =>{
        modal.close();
    })
    //add book
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const book = Bookshelf.bookInfo();
        if(book.title && book.author && book.pages) {
            Bookshelf.addBook(book);
            addBookInfo.reset(); //works
            modal.close();
        } else {
            alert("Please fill out all fields.")
        }
    }); 

})();

function createBookCard(index, book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookshelf.appendChild(bookCard);

    const bookTitle = document.createElement('div');
    bookTitle.classList.add('bookTitle');
    bookCard.appendChild(bookTitle);
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('bookAuthor');
    bookCard.appendChild(bookAuthor);
    const authorLabel = document.createElement('p');
    bookAuthor.appendChild(authorLabel);
    authorLabel.textContent = "By:";
    const authorName = document.createElement('p');
    bookAuthor.appendChild(authorName);
    authorName.textContent = book.author;

    const bookPages = document.createElement('div');
    bookPages.classList.add('bookPages');
    bookCard.appendChild(bookPages);
    const pageLabel = document.createElement('p');
    bookPages.appendChild(pageLabel);
    pageLabel.textContent = "Pages:"
    const noOfPages = document.createElement('p');
    bookPages.appendChild(noOfPages);
    noOfPages.textContent = book.pages;

    const statusToggle = document.createElement('button')
    statusToggle.classList.add('statusToggle');
    statusToggle.setAttribute('id', `button${index}`);
    bookCard.append(statusToggle);
    statusToggle.textContent = book.status.toUpperCase();
}


const book1 = new Book("To Kill A Mockingbird", "Harper Lee", 281, "To read");
const book2 = new Book("Valoran is What?", "Rob Moore", 321, "Read");
const book3 = new Book("Gaming Pro, Gaming Life", "SEN TENZ", 231, "To read");
Bookshelf.addBook(book1);
Bookshelf.addBook(book2);
Bookshelf.addBook(book3);

const btn = document.getElementsByClassName('statusToggle');
console.log("hello " + btn.length);

document.querySelector("#bookshelf").addEventListener('click', event => {
    if(!event.target.matches('button')) {
        return;
    };
    const value = event.target.id;
    toggleStatus(value);
});

function toggleStatus(value) {
    const x = document.getElementById(value);
    if (x.textContent === "TO READ") {
        x.textContent = "READ";
    } else {
        x.textContent = "TO READ";
    }
}