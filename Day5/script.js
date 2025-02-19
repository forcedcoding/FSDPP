// DOM in javascript
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// console.log(document.scripts);
// console.log(document.scripts[0]);
// console.log(document.scripts[0].getAttribute('src'));
// console.log(document.scripts[0].getAttribute('type'));

// creating a code that will change the title of the page
const title = document.title;
console.log(title);
document.title = "I got changed";

// changing the inner text of the h1 tag
const h1 = document.querySelector('h1');
console.log(h1.innerText);
h1.innerText = "I got changed";
