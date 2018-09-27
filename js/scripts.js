var vowels = ["a", "e", "i", "o", "u"];
var input = [];


$(document).ready(function(){
  $("#puzzle-form").submit(function(event){
    event.preventDefault();
    $("#puzzle-form").hide();

    input.push($("#sentence").val());

    var output = input.for(index = 0, index < input.length, index += 1) {
      input[index].compare(vowels)
    };

    console.log(output);

  });
});
