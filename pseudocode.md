MIND READER PROJECT

Use state management to progress forward to the next view, backward to the previous view, and reset to the first view on the page.
By default, the app should prompt the user to click through the single-page app and see a new view for every step.
You need to be able to scroll through the numbers to find your symbol (page 5 on the wireframe).



VARIABLES 

-BEGIN
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

- Change Page. 
    Create a variable to set the current page equal the first page from the object array. 
    Set the properties in the html to the properties for the given object array
    Make the page increment by 1 upon clicking. 

- Reset Page. 
    Create a variable to set the current page equal the first page from the object array. 
    Set the properties in the html to the properties for the given object array
    Make the page revert back to the first object array upon clicking. 

- Next Button Event handler.
    Create an event listener for the next button to initiate the change page function upon click

- A Forward/Back function for the Go/Reset button. 
    If the text for the button equals "Go" then call the change Function
    If the text for the button equals "Reset" then call the Reset Page Function.

- Go / Reset Event Handler
    Create an event listener for the go/reset button that calls the Forward/Back function upon clicking

- Symbol Generator. (Picks a random symbol out of a variable that contains an array of symbols)





OBJECT ORIENTED

- An object that contains an array of objects. Each of the objects in the array will corrispond to a different page display with it's own unique set of properties. h1, nextbutton, p, resetbutton etc



START:
1. Display the first page 
2. Move to the second object array (second page) upon clicking the "go" button
3. Increment to the next object array upon clicking the "next" button. OR Revert page to the first object array (page 1) upon clicking the "Reset" button (which is the same button as the go button but with a different name on page 2)
END