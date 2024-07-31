const newBookBtn = document.getElementById('new-book');
const closeBtn = document.getElementById('close-modal');
const submitBtn = document.getElementById('submit');
const modal = document.getElementById('modal');
const addBookInfo = document.getElementById('add-book-info');
const bookshelf = document.getElementById('bookshelf');

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
    const book = bookInformation();
    addBookToLibrary(book);
    modal.close();
    /*addBookInfo.reset();*/
    createBookCard(book);
});

const myLibrary = [];
//constructor
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

//get user input and put in new Book object
function bookInformation(book) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('number-of-pages').valueAsNumber;
    const readStatus = document.getElementById('status').value;
    book = new Book(title, author, pages, readStatus);
    return book;
}

//add new book to the array
function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}


function createBookCard(book) {
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

    const bookStatus = document.createElement('div');
    bookStatus.classList.add('bookStatus');
    bookCard.append(bookStatus);
    const statusToggle = document.createElement('button')
    statusToggle.classList.add('statusToggle');
    bookStatus.append(statusToggle);
    statusToggle.textContent = book.readStatus;
    statusToggle.addEventListener('click', () =>{
        if (book.readStatus === "Read") {
            statusToggle.textContent = "To Read";
        } else {
            statusToggle.textContent = "Read";
        }
    });
}
