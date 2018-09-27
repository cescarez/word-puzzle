var vowels = ["a", "e", "i", "o", "u"];
var input = [];


$(document).ready(function(){
  $("#puzzle-form").submit(function(event){
    event.preventDefault();
    $("#puzzle-form").hide();

    //collect user input and push to "input" array
    input.push($("#sentence").val());

    //create loop that executes for each letter of
    for (index = 0; index < input.length; index =+1 ) {
      input[index].sort(function(a,b){return a-b});
    };

    console.log(output);

  });
});

var vowels = ["a", "e", "i", "o", "u"];
var input = [];
var inputArray = [];

$(document).ready(function(){
  $("#puzzle-form").submit(function(event){
    event.preventDefault();
    $("#puzzle-form").hide();

    //collect user input and push to "input" array
    input.push($("#sentence").val());

for (index = 0; index < input.length; index =+1 ) {
  inputArray.push(input[index].split(""));
};
