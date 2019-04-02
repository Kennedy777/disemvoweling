$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var quoteInput = $("input#quote").val();
    var startIndex = 0
    var vowels = ["a", "e", "i", "o", "u"];


    var quoteOutput = quoteInput.replace( /[aeiou]/g, '_');
    alert(quoteOutput);

    $("#puzzleResult").show();

    event.preventDefault();
  });
});
