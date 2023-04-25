//my base array
const origArray = [2, 3, 4];

//func to update value in text boxes, uses array as arguement.
//uaccess all textboxes values using QuerySelctorAll.
//loops thru array with for loop because I couldn't figure out a better way to update the values of the array that worked.
function updateTextBoxes(array) {
    const textBoxes = document.querySelectorAll('.textbox');
    for (let i = 0; i < array.length; i++) {
      textBoxes[i].value = array[i];
    }
}
  

//load dom content fisrt using eventlistener
document.addEventListener('DOMContentLoaded', function() {
  //write the values of the original Array into the textboxes using update function for my array
  updateTextBoxes(origArray);



  //event listener for the 1st button
  const myButton1 = document.getElementById('myButton1');
  myButton1.addEventListener('click', function() {
  //Use map to square each element in origArray
  const newArray = origArray.map(function(num) {
  return Math.pow(num, 2);
  });
  updateTextBoxes(newArray);
  });

  
  //----SECOND BUTTON----
  //
  // Add event listener for the second button using an anonymous function
  const myButton2 = document.getElementById('myButton2');
  myButton2.addEventListener('click', function() {
  
    // Using map to cube each element in origArray
    const newArray = origArray.map(function(num) {
        return Math.pow(num, 3);
      });
    updateTextBoxes(newArray);
  });


  //----THIRD BUTTON----
  //
  // Add event listener for the third button using a named function
  const myButton3 = document.getElementById('myButton3');
  myButton3.addEventListener('click', raiseToTheFourthPower);

  //----FOURTH BUTTON----
  //
  // Reset back to original array so I don't have to keep reloading the page
  const myButton4 = document.getElementById('myButton4');
  myButton4.addEventListener('click', function() {
  updateTextBoxes(origArray);
  });

});

//calculate the 4th power of each element in an array
function raiseToTheFourthPower() {
  const newArray = origArray.map(function(num) {
    return Math.pow(num, 4);
  });
  //gotta update the text boxes
  updateTextBoxes(newArray);
}



