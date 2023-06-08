const h1 = document.getElementById("h1")
const next = document.getElementById('next')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const goReset = document.getElementById('goReset')


// Test
const buttons = document.getElementById("goReset");
buttons.addEventListener('click', () => {
    buttons.textContent = 'Reset';
    })


const pageArray = [
    { topText: "I can read your mind", nextButton: "", textBelowButton: "" },

    { topText: "Pick a number from 01-99", nextButton: "NEXT", textBelowButton: "when you have your number click next" },

    { namtopTexte: "Add both digits together to get a new number", nextButton: "NEXT", textBelowButton: "Ex: 14 is 1 + 4 = 5" },

    { topText: "Subtract your new number from the original number", nextButton: "NEXT", textBelowButton: "Ex: 14 - 5 = 9" },

    { topText: "symbols", nextButton: "REVEAL", textBelowButton: "Find your new number." },

    { topText: "symbol", nextButton: "", textBelowButton: "Your symbol is: &" }
  ];


let pageIndex = 0

  
function changePage() {
let currentPage = pageArray[pageIndex]
h1.innerText = currentPage.topText
next.innerText = currentPage.nextButton
p1.innerText = currentPage.textBelowButton
pageIndex = (pageIndex + 1)
}
  
goReset.addEventListener("click", changePage);
next.addEventListener("click", changePage)


