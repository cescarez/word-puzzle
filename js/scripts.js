var inputArray = [];

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#puzzle").hide();

    //collect user input and push to "input" array
    var inputString = $("#sentence").val();
    if (parseInt(inputString) >= 0) {
      $("#output").text("I can't provide a word puzzle from just numbers! Please input a new sentence and try again.");
      $("p").addClass("error");
    } else {
      //chop sentence into array of each character
      var inputArrayTemp = inputString.split("");
      inputArrayTemp.forEach(function(character){
        inputArray.push(character);
      });

      //create loop that executes for each letter of sentence
      for (var index = 0; index < inputArray.length; index +=1 ) {
          if (inputArray[index] === "a" || inputArray[index] === "e" || inputArray[index] === "i" || inputArray[index] === "o" || inputArray[index] === "u" || inputArray[index] === "A" || inputArray[index] === "E" || inputArray[index] === "I" || inputArray[index] === "O" || inputArray[index] === "U") {
          inputArray[index] = "-";
          console.log("replacing vowel");
        } else {;
          console.log("not a vowel");
        }
      };

      //output the initial input, but with vowels replaced/
      var outputString = inputArray.join("");
      if (outputString.includes("-")) {
      $("#output").text("Your puzzle is: " + outputString);
      } else if (outputString == "") {
        $("#output").text("No starting sentence was entered. Please try again.");
        $("p").addClass("error");
      } else {
        $("#output").text("Please enter a different sentence -- this one is too easy to guess!");
        $("p").addClass("error");
      }
    }
    $("#scrambled").show();
  });

});
