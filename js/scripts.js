$(document).ready(function(){
$(".btn-success").click(event);
event.preventDefault();
});

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomLetter = "";
for (var i = 0; i < 1; i++) {
  var rand = Math.floor(Math.random()*alphabet.length);
  randomString = randomString + alphabet.charAt(rand);
  $()
