Mind Reader

Thinking outloud

    Each page will be an object in an array of objects

    Each one of those objects will have different properties that will be the different elements on the page.

    Every time the button is clicked it will "change state" by moving to the next object in the array resulting in the elements on the page changing.
    
    The objects in the array will need:
    object 1: h1, go button(goes to the next object in the array)
    object 2: h1, next button(goes to the next object in the array), p, reverse button(goes to the first object in the array) 
    object 3: h1, next button(goes to the next object in the array), p, p, reverse button(goes to the first object in the array) 
    object 4: h1, next button(goes to the next object in the array), p, p, reverse button(goes to the first object in the array) 
    object 5: h1, next button(goes to the next object in the array), p, p, reverse button(goes to the first object in the array) 
    object 6: symbol, p, smaller symbol, reverse button(goes to the first object in the array) 

Create varialbes for each HTML element 

Set the state by creating the array of objects 

Functions
1: A function that moves the state to the next object array when the button is clicked
2: A function that reverts the array back to the first object in the array when the reverse button is clicked

Procedural

-BEGIN
-INIT()
-RENDER
-END

Functional

- Event handlers. (Registers when the buttons have been clicked and what to do once they are clicked)

- A reset button. (Will revert the display back to the the first array object)

- A next button. (Will increment to the next array object)

- Symbol Generator. (Picks a random symbol out of a variable that contains an array of symbols)

Object Oriented

- An object that contains an array of objects. Each of the objects in the array will corrispond to a different page display with it's own unique set of properties. h1, nextbutton, p, resetbutton etc

