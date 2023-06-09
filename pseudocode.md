MIND READER PROJECT

Use state management to progress forward to the next view, backward to the previous view, and reset to the first view on the page.
By default, the app should prompt the user to click through the single-page app and see a new view for every step.
You need to be able to scroll through the numbers to find your symbol (page 5 on the wireframe).



VARIABLES 

-BEGIN

The h1 display (contains the text that provides instructions)

The next button (clickable button thats renders the next page)

The first "p" content (contains the text that provides the examples)

The Go / Reset Button (clickable button that renders the next page and then resets to the first page on the subsequent clicks)

The number / symbol array (contains the number 0 - 99 with corrisponding symbols on page 5)

-END



FUNCTIONS

- The Object Array 
    An array of objects that corrispond to each page with their own uniques properties
    SHould also include a pageIndex


- Init 
    Take the variables that are declared at the top and set their inner.html to equal the relavant property that is inside 
    one of the objects in the object array. 

- Change Page. 
    Create a variable to set the current page equal the first page from the object array. 
    Set the properties in the html to the properties for the given object array
    Make the page increment by 1 upon clicking. 

- Reset Page. 
    Create a variable to set the current page equal the first page from the object array. 
    Set the properties in the html to the properties for the given object array
    Make the page revert back to the first object array upon clicking. 

 - A Forward/Back function for the Go/Reset button. 
    If the text for the button equals "Go" then call the change Function
    If the text for the button equals "Reset" then call the Reset Page Function.

- Next Button Event handler.
    Create an event listener for the next button to initiate the change page function upon click

- Go / Reset Event Handler
    Create an event listener for the go/reset button that calls the Forward/Back function upon clicking

- Event Handler to load the init function
    Create an event listener with "load" set to the init function

- Symbol Generator. 
    Picks a random symbol out of a variable that contains an array of symbols using math.random? 



START:
1. Display the first page 
2. Move to the second object array (second page) upon clicking the "go" button
3. Increment to the next object array upon clicking the "next" button. OR Revert page to the first object array (page 1) upon clicking the "Reset" button (which is the same button as the go button but with a different name on page 2)
END

