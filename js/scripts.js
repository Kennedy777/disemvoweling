$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var quoteInput = $("input#quote").val();
    var startIndex = 0
    var vowels = ["a", "e", "i", "o", "u"];


    var quoteOutput = quoteInput.replace( /[aeiou]/g, '_');
  

    $("#spanId").append(quoteOutput);
    $("#puzzleResult").show();

    event.preventDefault();
  });
});
