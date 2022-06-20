var currentNumberWrapper = document.getElementById ("currentNumber")
var currentNumber = 0

function increment () {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1 } 
    else {
      currentNumber = currentNumber
    }
      if (currentNumber <0) {
      currentNumberWrapper.style.color = "red";} else {
        currentNumberWrapper.style.color = "black";
      }
    
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
 if (currentNumber > -10) {
      currentNumber = currentNumber - 1 } 
      else {
        currentNumber = currentNumber
      }
        if (currentNumber <0) {
        currentNumberWrapper.style.color = "red";} else {
          currentNumberWrapper.style.color = "black";
        }
      
      currentNumberWrapper.innerHTML = currentNumber;
    
}