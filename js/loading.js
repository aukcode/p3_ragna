/*
FILE NAME: menu.js
WRITTEN BY: Runar Johannessen
WHEN: 08.11.16
PURPOSE: Set a loading screen to display until all the page content is ready to be displayed
*/

var myVar;

function loading() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
