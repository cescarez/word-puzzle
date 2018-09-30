// var inputArray = [];

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#puzzle").hide();

    //collect user input and push to "input" array
    var inputString = $("#sentence").val();

    //chop sentence into array of each character
    var inputArray = inputString.split("");
    // var inputArray = input.map(function(sentence){
    //   input.split("");
    // });
    // input.forEach(function(sentence){
    //   inputArray.push(sentence.split(""));
    // });

    console.log(inputArray);

    //create loop that executes for each letter of sentence
    for (var index = 0; index < inputArray.length; index +=1 ) {

      if (inputArray[$(index).val()] === "a" || inputArray[index] === "e" || inputArray[index] === "i" || inputArray[index] === "o" || inputArray[index] === "u") {
        var replacedInput = inputArray[index].replace("-");
        $("#output").text(replacedInput);
        console.log(replacedInput);
      } else {
        $("#output").text("Please enter a different sentence -- this one is too easy to guess!");
        console.log("no vowelz");
      }


      var inputIterator = inputArray.values();
    };


    $("#scrambled").show();

  });
});
