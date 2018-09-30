var inputArray = [];

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#puzzle").hide();

    //collect user input and push to "input" array
    var inputString = $("#sentence").val();

    //chop sentence into array of each character
    var inputArrayTemp = inputString.split("");
    inputArrayTemp.forEach(function(character){
      inputArray.push(character);
    })

    //create loop that executes for each letter of sentence
    for (var index = 0; index < inputArray.length; index +=1 ) {
        if (inputArray[index] === "a" || inputArray[index] === "e" || inputArray[index] === "i" || inputArray[index] === "o" || inputArray[index] === "u" || inputArray[index] === "A" || inputArray[index] === "E" || inputArray[index] === "I" || inputArray[index] === "O" || inputArray[index] === "U") {
        inputArray[index] = "-";
        console.log("replacing vowel");
      } else {;
        console.log("not a vowel");
      }
    };

    //output the initial input, buw with vowels replaced/
    var outputString = inputArray.join("");
    if (outputString.includes("-")) {
    $("#output").text(outputString);
  } else {
    $("#output").text("Please enter a different sentence -- this one is too easy to guess!");
  }

    $("#scrambled").show();

  });

});
