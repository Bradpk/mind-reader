//--- Creates the variables that are linked to html elements 
const h1 = document.getElementById("h1")
const next = document.getElementById('next')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const goReset = document.getElementById('goReset')
let pageIndex = 0



/*--- Contains an array of objects that corrispond to different pages. Each page contains its own properties which will display 
different html element when cycled through. 
*/
const pageArray = [
    { topText: "I can read your mind", nextButton: "", textBelowButton: "", goButton: "Go" },//page 1

    { topText: "Pick a number from \n01 - 99", nextButton: "NEXT", textBelowButton: "when you have your number click next", goButton: "↻" },//page 2

    { topText: "Add both digits together to get a new number", nextButton: "NEXT", textBelowButton: "Ex: 14 is 1 + 4 = 5 \nclick to proceed", goButton: "↻" },//page 3

    { topText: "Subtract your new number from the original number", nextButton: "NEXT", textBelowButton: "Ex: 14 - 5 = 9 \nclick to proceed", goButton: "↻" },//page 4

    { topText: "Symbols", nextButton: "REVEAL", textBelowButton: "Find your new number. Note the symbol beside the number", goButton: "↻" },//page 5

    { topText: "&", nextButton: "", textBelowButton: "Your symbol is: \n&", goButton: "↻" }//page 6
];

/*--- This function will cycle through the different object arrays (pages). 
currentPage is set to equal a different array number in pageArray
.innerText will change the html content of the chosen variable by setting it to equal one of the properties in one of 
the objects based upon which array number it is currently at. 
pageIndex will increase the pageIndex of itself by one which will change the html display to the properties in the next array. 
*/

function changePage() {
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

/*--- This function will reset the object array back to the first page. 
currentPage is set to equal a different array number in pageArray
.innerText will change the html content of the chosen variable by setting it to equal one of the properties in one of 
the objects based upon which array number it is currently at. 
pageIndex will equal revert back to 0
*/

function changePageReset() {
    let currentPage = pageArray[pageIndex]
    h1.innerText = currentPage.topText
    next.innerText = currentPage.nextButton
    p1.innerText = currentPage.textBelowButton
    goReset.innerText = currentPage.goButton
    pageIndex = 0
}

// the button will call the changePage function upon click
next.addEventListener("click", changePage);



// This will call the changePage function if the goReset button says "Go" otherwise it will call the changePageReset function
function forwardBack() {
    if (goReset.innerText === "Go") {
        changePage()
    } else {
        changePageReset()
    }
}

goReset.addEventListener("click", forwardBack);







