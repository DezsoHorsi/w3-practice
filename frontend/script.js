let favoriteBooks = [
  {
      title: "Öreg néne őzikéje",
      author: "Fazekas Anna",
      year: 1952,
      isNewerThan2000: false
  },
  {
      title: "Szamárfül",
      author: "Romhányi József",
      year: 2003,
      isNewerThan2000: true
  }
];


/* for (let book of favoriteBooks) {
  console.log(book.title)
};

for (let i= 0; i <favoriteBooks.length; i++) {
  console.log(favoriteBooks[i].author)
}; */

if (favoriteBooks[0].isNewerThan2000 === true) {
  console.log(favoriteBooks[0].title)
};

const bookTitleOne = favoriteBooks[0].title
const bookTitleTwo = favoriteBooks[1].title

if (favoriteBooks[0].isNewerThan2000 === true) {
  
  console.log("This book is newer than 2000:" + bookTitleOne)
} else {
  console.log("This book is older than 2000:" + bookTitleTwo)
};

if (favoriteBooks[1].isNewerThan2000 === true) {
  
  console.log("This book is newer than 2000:" + bookTitleOne)
} else {
  console.log("This book is older than 2000:" + bookTitleTwo)
};

if (favoriteBooks[0].isNewerThan2000 !== true) {
  
  console.log("This book is newer than 2000:" + bookTitleOne)
} else {
  console.log("This book is older than 2000:" + bookTitleTwo)
};

if (favoriteBooks[0].isNewerThan2000 !== false) {
  
  console.log("This book is newer than 2000:" + bookTitleOne)
} else {
  console.log("This book is older than 2000:" + bookTitleTwo)
};

// DISPLAY TITLES --- FOR..OF LOOP ---
for ( let element of favoriteBooks){
	console.log(element.title);
};
// DISPLAY AUTHORS --- FOR LOOP ---
for ( let index = 0; index < favoriteBooks.length; index++) {
    console.log(favoriteBooks[index].author);
};
// CHECK THE AGE OF BOOKS --- IF ---
if (favoriteBooks[0].isNewerThan2000 === true) {
	console.log(favoriteBooks[0].title);
};
// CHECK THE AGE OF BOOKS --- IF/ELSE ---
if (favoriteBooks[0].isNewerThan2000 === true) {
	console.log("This book is newer than 2000:", favoriteBooks[0].title)
} else {
	console.log("This book is older than 2000:", favoriteBooks[0].title)
};

if (favoriteBooks[1].isNewerThan2000 === true) {
	console.log("This book is newer than 2000:", favoriteBooks[1].title)
} else {
	console.log("This book is older than 2000:", favoriteBooks[1].title)
};
// CHECK THE AGE OF BOOKS SWITCHED --- IF/ELSE ---
if (favoriteBooks[0].isNewerThan2000 !== true) {
	console.log("This book is older than 2000:", favoriteBooks[0].title)
} else {
	console.log("This book is newer than 2000:", favoriteBooks[0].title)
};

if (favoriteBooks[1].isNewerThan2000 !== true) {
	console.log("This book is older than 2000:", favoriteBooks[1].title)
} else {
	console.log("This book is newer than 2000:", favoriteBooks[1].title)
};
// COMPARE THE PUBLISHING YEAR

if (favoriteBooks[0].year > 2000) {
	console.log("This book is newer than 2000:", favoriteBooks[0].title)
} else {
	console.log("This book is older than 2000:", favoriteBooks[0].title)
};

if (favoriteBooks[1].isNewerThan2000 > 2000) {
	console.log("This book is newer than 2000:", favoriteBooks[1].title)
} else {
	console.log("This book is older than 2000:", favoriteBooks[1].title)
};

// COMBINE THE RESULTS USING LOOPS AND CONDITIONALS --- FOR LOOP ---

for ( let index = 0; index < favoriteBooks.length; index++)
if (favoriteBooks[index].year > 2000) {
    console.log("This book is newer than 2000:", favoriteBooks[0].title)
} else {
    console.log("This book is older than 2000:", favoriteBooks[1].title)
};

// COMBINE THE RESULTS USING LOOPS AND CONDITIONALS --- FOR..OF LOOP ---
 
for ( let element of favoriteBooks)
if (element.year > 2000) {
    console.log("This book is newer than 2000:", element.title)
} else {
    console.log("This book is older than 2000:", element.title)
};
