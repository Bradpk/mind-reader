
//SIMPLIFY 

// Delcaring the variables with relavant links to their HTML tags
let h1 = document.getElementById("h1")
let next = document.getElementById('next')
let p1 = document.getElementById('p1')
let goReset = document.getElementById('goReset')
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_']

// This contains an array of objects with unique key value properties that corrispond to the different display elements for each page. 
// Also included is the pageIndex which keeps track of what page it is currently on. 
let state = {
    pageIndex: 0,
    pageArray: [
        { h1: "I can read your mind", next: "NEXT", p1: "", goReset: "GO", nextHidden: true, },

        { h1: "Pick a number from <br>01 - 99", next: "NEXT", p1: "When you have your number click next", goReset: "↻", nextHidden: false, },

        { h1: "Add both digits together to get a new number", next: "NEXT", p1: "Ex: 14 is 1 + 4 = 5 <br>click next to proceed", goReset: "↻", nextHidden: false, },

        { h1: "Subtract your new number from the original number", next: "NEXT", p1: `Ex: 14 - 5 = 9 <br>click next to proceed`, goReset: "↻", nextHidden: false, },

        { h1: "0 - &<br>1 - @<br> 2 - $<br> 3 - B", next: "REVEAL", p1: "Find your new number. <br>Note the symbol beside the number", goReset: "↻", nextHidden: false, },

        { h1: "&", next: "REVEAL", p1: "Your symbol is: <br> &", goReset: "↻", nextHidden: true, }
    ],
};

// Use innerHTML instead of innerText so that I can see the <br> line breaks.
// This function sets up how the page will initially look upon loading. 
function init() {
    h1.innerHTML = state.pageArray[state.pageIndex].h1;
    next.hidden = state.pageArray[state.pageIndex].nextHidden;
    p1.innerHTML = state.pageArray[state.pageIndex].p1;
    goReset.innerHTML = state.pageArray[state.pageIndex].goReset;
    chosenSymbol()
}

//This function sets up how the page will look and increments the pageIndex by 1. 
function changePage() {
    state.pageIndex = state.pageIndex + 1;
    h1.innerHTML = state.pageArray[state.pageIndex].h1;
    next.hidden = state.pageArray[state.pageIndex].nextHidden;
    p1.innerHTML = state.pageArray[state.pageIndex].p1;
    goReset.innerHTML = state.pageArray[state.pageIndex].goReset;
    next.innerHTML = state.pageArray[state.pageIndex].next
}

//This function reverts the pageIndex back to 0 and reintilizes the original page display
function changePageReset() {
    state.pageIndex = 0;
    init()
}

//This function calls "changePage" if the pageIndex is 0 and reverts back to pageIndex 0 if it isn't. 
function forwardBack() {
    if (state.pageIndex === 0) {
        changePage();
    } else {
        changePageReset();
    }
}

// Instruct the next button to change page upon click
// Instruct the goReset button to revert page to page one upon click
// Instruct the page to display the init display upon loading
next.addEventListener("click", changePage);
goReset.addEventListener("click", forwardBack);
addEventListener('load', init);

//Lets figure out this symbol business
let chosenSymbol = () => {
let numbers = ''
let magicSymbol = ''

for(let i = 0; i < 100; i++){
if (i % 9 === 0){
magicSymbol = "&"
} else {
    let random = Math.floor(Math.random() * symbols.length)
    magicSymbol = symbols[random]
}
numbers += i + ' = ' + magicSymbol + '<br>';
} 
state.pageArray[4].h1 = numbers
}






//THIS CODE SUCKS MY DUDE

//--- Creates the variables that are linked to html elements 
/*const h1 = document.getElementById("h1")
const next = document.getElementById('next')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const goReset = document.getElementById('goReset')
let pageIndex = 0
*/

/*--- Contains an array of objects that corrispond to different pages. Each page contains its own properties which will display
different html element when cycled through.
*/
/*const pageArray = [
    { topText: "I can read your mind", nextButton: "", textBelowButton: "", goButton: "Go" },//page 1

    { topText: "Pick a number from \n01 - 99", nextButton: "NEXT", textBelowButton: "when you have your number click next", goButton: "↻" },//page 2

    { topText: "Add both digits together to get a new number", nextButton: "NEXT", textBelowButton: "Ex: 14 is 1 + 4 = 5 \nclick to proceed", goButton: "↻" },//page 3

    { topText: "Subtract your new number from the original number", nextButton: "NEXT", textBelowButton: "Ex: 14 - 5 = 9 \nclick to proceed", goButton: "↻" },//page 4

    { topText: "Symbols", nextButton: "REVEAL", textBelowButton: "Find your new number. Note the symbol beside the number", goButton: "↻" },//page 5

    { topText: "&", nextButton: "", textBelowButton: "Your symbol is: \n&", goButton: "↻" }//page 6
];
*/

/*--- This function will cycle through the different object arrays (pages).
currentPage is set to equal a different array number in pageArray
.innerText will change the html content of the chosen variable by setting it to equal one of the properties in one of
the objects based upon which array number it is currently at.
pageIndex will increase the pageIndex of itself by one which will change the html display to the properties in the next array.
*/

/*function changePage() {
    let currentPage = pageArray[pageIndex]
    h1.innerText = currentPage.topText
    next.innerText = currentPage.nextButton
    p1.innerText = currentPage.textBelowButton
    goReset.innerText = currentPage.goButton
    if (pageIndex === 0 || pageIndex === 5) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
        next.innerText = currentPage.nextButton;
    }
    pageIndex = (pageIndex + 1)
}
*/

/*--- This function will reset the object array back to the first page.
currentPage is set to equal a different array number in pageArray
.innerText will change the html content of the chosen variable by setting it to equal one of the properties in one of
the objects based upon which array number it is currently at.
pageIndex will equal revert back to 0
*/

/*function changePageReset() {
    let currentPage = pageArray[pageIndex]
    h1.innerText = currentPage.topText
    next.innerText = currentPage.nextButton
    p1.innerText = currentPage.textBelowButton
    goReset.innerText = currentPage.goButton
    pageIndex = 0
}
*/

// This will call the changePage function if the goReset button says "Go" otherwise it will call the changePageReset function
/*function forwardBack() {
    if (goReset.innerText === "Go") {
        changePage()
    } else {
        changePageReset()
    }
}
*/

// This will call the forwardBack function upon click
/*goReset.addEventListener("click", forwardBack);

// This will call the changePage function upon click
next.addEventListener("click", changePage);
*/


/* windows.onload vs DOMContentLoaded vs load?

window.onload = function () {
const h1 = document.getElementById("h1")
const next = document.getElementById('next')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const goReset = document.getElementById('goReset')

h1.innerText = 
next.innerText = 
p1.innerText = 
goReset.innerText = 
}
*/



