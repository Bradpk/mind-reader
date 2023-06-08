MIND READER PROJECT

Use state management to progress forward to the next view, backward to the previous view, and reset to the first view on the page.
By default, the app should prompt the user to click through the single-page app and see a new view for every step.
You need to be able to scroll through the numbers to find your symbol (page 5 on the wireframe).



VARIABLES 

-BEGIN
-RENDER
-INIT

The h1 display (contains the text that provides instructions)

The next button (clickable button thats renders the next page)

The first "p" content (contains the text that provides the examples)

The second "p" content (contains the text telling the user to proceed)

The Go / Reset Button (clickable button that renders the next page and then resets to the first page on the subsequent clicks)

The number / symbol array (contains the number 0 - 99 with corrisponding symbols on page 5)

READ A variable to keep track of the current page.

INIT The object array (an array of objects that corrispond to each page with their own uniques properties)

-END



FUNCTIONS

- Event handlers. (Registers when the buttons have been clicked and what to do once they are clicked)

- A reset button. (Will revert the display back to the the first array object)

- A next button. (Will increment to the next array object)

- Symbol Generator. (Picks a random symbol out of a variable that contains an array of symbols)

- Change Page ()



OBJECT ORIENTED

- An object that contains an array of objects. Each of the objects in the array will corrispond to a different page display with it's own unique set of properties. h1, nextbutton, p, resetbutton etc



START:
1. Display the first page 
2. Move to the second object array (second page) upon clicking the "go" button
3. Increment to the next object array upon clicking the "next" button. OR Revert page to the first object array (page 1) upon clicking the "Reset" button (which is the same button as the go button but with a different name on page 2)
END