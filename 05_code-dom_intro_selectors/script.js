"use strict";
console.log("JS finished loading");

const firstDiv = document.getElementById("first");
const secondDiv = document.getElementById("second");
firstDiv.innerHTML = "I have an id of FIRST";
secondDiv.innerHTML = "I am the second div";

const htmlCollection = document.getElementsByClassName("third");

const elementsArr = Array.from(htmlCollection);

const tagsHtmlCollection = document.getElementsByTagName("div");

const htmlElement = document.querySelector(".third");

const htmlNodesList = document.querySelectorAll(".third, #first");

let isHappy = true;

if (isHappy === true) firstDiv.style.border = "5px solid red";

const myFontsPx = 25;

firstDiv.style.fontSize = `${myFontsPx}px`;
firstDiv.id = "crazyId";

firstDiv.className = "myOwnClass anotherCrazyClass";
firstDiv.className += "concatenatedClass";
console.log(firstDiv);
