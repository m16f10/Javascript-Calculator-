/* NOTE: expplication of the Responsivity of the calculator 

To make the calculator responsive we used the event as an Attribute in the HTML file

1- Display the numbers in the screen 
     onclick = "display.value = 'number'" 
     == once you click the input button the number will be displayed in the screen 
   Duplicate the numbers in the screen
     onclick = "display.value += 'number'" ---- we use the + 
     == once you click How many times you want the number will be added and displayed in the screen 

2- DE: delete button 
    objectif: delete the last number from the display screen 
    onclick = "display.value = display.value.toString().slice(0, -1)"
    ** toString(): used to convert a number to a string 
    ** slice with negative value: used to delete from the end of the Number 

3- Equal = button
   objectif: Used to calc the operation and give us the results 
   onclick = "dispay.value = display.value.eval(display.value)"
   ** eval: function that calc The arithmetic operation 

*/