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
    const bookshelf = [];
    const addBook = (book) => {

    }


})();

const DisplayController = (() => {
    const newBookBtn = document.getElementById('new-book');
    const closeBtn = document.getElementById('close-modal');
    const submitBtn = document.getElementById('submit');
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
        if(book.title && book.author && book.pages) {
            addBookToLibrary(book);
            createBookCard(book);
            addBookInfo.reset();
            modal.close();
        } else {
            alert("Please fill out all fields.")
        }
    });   

})();
