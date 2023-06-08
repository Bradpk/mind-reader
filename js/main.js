//--- Creates the variables that are lniked with their html elements 
const h1 = document.getElementById("h1")
const next = document.getElementById('next')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const goReset = document.getElementById('goReset')


//--- Changes the text inside the goReset button to "Reset once clicked"
const buttons = document.getElementById("goReset");
buttons.addEventListener('click', () => {
    buttons.textContent = 'Reset';
    })

/*--- Contains an array of objects that corrispond to different pages. Each page contains its own properties which will display 
different html element when cycled through. 
*/
const pageArray = [
    { topText: "I can read your mind", nextButton: "", textBelowButton: "" },//page 1

    { topText: "Pick a number from 01-99", nextButton: "NEXT", textBelowButton: "when you have your number click next" },//page 2

    { namtopTexte: "Add both digits together to get a new number", nextButton: "NEXT", textBelowButton: "Ex: 14 is 1 + 4 = 5" },//page 3

    { topText: "Subtract your new number from the original number", nextButton: "NEXT", textBelowButton: "Ex: 14 - 5 = 9" },//page 4

    { topText: "symbols", nextButton: "REVEAL", textBelowButton: "Find your new number." },//page 5

    { topText: "symbol", nextButton: "", textBelowButton: "Your symbol is: &" }//page 6
  ];

/*--- This function will cycle through the different object arrays (pages). 
currentPage is set to equal a different array number in pageArray
.innerText will change the html content of the chosen variable by setting it to equal one of the properties in one of 
the objects based upon which array number it is currently at. 
pageIndex will increase the pageIndex of itself by one which will change the html display to the properties in the next array. 
*/
let pageIndex = 0
  
function changePage() {
let currentPage = pageArray[pageIndex]
h1.innerText = currentPage.topText
next.innerText = currentPage.nextButton
p1.innerText = currentPage.textBelowButton
pageIndex = (pageIndex + 1)
}
  
/*--- Inserting the changePage function into the "goReset" button event listener will change the page upon clicking by displaying 
the html element in the second object array.
*/
goReset.addEventListener("click", changePage);

/*--- Inserting the changePage function into the "next" button event listener will change the page upon clicking by displaying 
the html element in the second object array.
*/
next.addEventListener("click", changePage);

//--- Figuring out how to revert back to page one upon clicking the go reset button the second time
function reset() {
if (goReset.textContent === "Reset") {
   
}
}

