"use strict";
console.log("JS finished loading");

let textNode = document.createTextNode(
  "I am a text node and I can only contain text, I cannot contain children"
);

let pElement = document.createElement("p").appendChild(textNode);

document.body.appendChild(pElement);

// Creation of element
let h2Element = document.createElement("h2");

h2Element.innerText = "I have just been created!";

//document.body.appendChild(h2Element);
document.getElementById("content").appendChild(h2Element);
/* 
let gLink = document.getElementById("google-link");

gLink.setAttribute("href", "https://www.google.com");

console.log(gLink.getAttribute("href"));

// Short form for production code
document
  .getElementById("google-link")
  .setAttribute("href", "https://www.ironhack.com");
gLink.removeAttribute("id");

console.log(gLink); */
