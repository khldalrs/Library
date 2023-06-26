let mylibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

book.prototype.toggleRead = function() {
  this.read = !this.read;
};

function toggleRead(index) {
  mylibrary[index].toggleRead();
  render();
};

function render() {
  let libraryel = document.querySelector("#library");
  libraryel.innerHTML = "";
  for (let i = 0; i < mylibrary.length; i++) {
    let book = mylibrary[i];
    let bookel = document.createElement("div");
    bookel.innerHTML = 
    `<div class="book-instant">
      <h2>${book.title}</h2> <h4> by ${book.author}</h4> <br> ${book.pages} pages - ${book.read ? "Read" : "Not Read"}<br><br>
      <button class="remove" onclick="removeBookFromLibrary(${i})">Remove</button> 
      <button class="read" onclick="toggleRead(${i})">Toggle Read</button>
    </div>`;
    libraryel.appendChild(bookel);
  }
};


function removeBookFromLibrary(index) {
  mylibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newbook = new book(title, author, pages, read);
  console.log(newbook);
  mylibrary.push(newbook);
  render();
};

let newbook = document.querySelector("#newbook");
newbook.addEventListener("click", function() {
   let bookform = document.getElementById("bookform");
   bookform.style.display = "block"; 
});

document.querySelector("#bookform").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
});
