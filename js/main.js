const h1 = document.getElementById("h1")
const next = document.getElementById('next')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const goReset = document.getElementById('goReset')


//---
const buttons = document.getElementById("goReset");
buttons.addEventListener('click', () => {
    buttons.textContent = 'Reset';
    })

//---
const pageArray = [
    { topText: "I can read your mind", nextButton: "", textBelowButton: "" },//page 1

    { topText: "Pick a number from 01-99", nextButton: "NEXT", textBelowButton: "when you have your number click next" },//page 2

    { namtopTexte: "Add both digits together to get a new number", nextButton: "NEXT", textBelowButton: "Ex: 14 is 1 + 4 = 5" },//page 3

    { topText: "Subtract your new number from the original number", nextButton: "NEXT", textBelowButton: "Ex: 14 - 5 = 9" },//page 4

    { topText: "symbol0s", nextButton: "REVEAL", textBelowButton: "Find your new number." },//page 5

    { topText: "symbol", nextButton: "", textBelowButton: "Your symbol is: &" }//page 6
  ];

//---
let pageIndex = 0
  
function changePage() {
let currentPage = pageArray[pageIndex]
h1.innerText = currentPage.topText
next.innerText = currentPage.nextButton
p1.innerText = currentPage.textBelowButton
pageIndex = (pageIndex + 1)
}
  
//---
goReset.addEventListener("click", changePage);
next.addEventListener("click", changePage);

//---
function reset() {
if (goReset.textContent === "Reset") {
   
}
}

