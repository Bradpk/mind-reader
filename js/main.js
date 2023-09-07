
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



