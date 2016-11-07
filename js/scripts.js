//
// function randomize(length) {
//
//   var randomLetters = "";
//   var lettersArray = [];
//
//   var letters = "abcdefghijklmnopqrstuvwxyz";
//
//   for( var i=0; i < length; i++ )
//     randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));
//
//     var lettersArray = randomLetters.split("");
//     // lettersArray.push(lettersArray.shift());
//
//     // return lettersArray;
//
//
//
// };


// alert(randomize(4));


function randomize(length) {

  var randomLetters = "";
  var lettersArray = [];

  var letters = "abcdefghijklmnopqrstuvwxyz";

  for( var i=0; i < length; i++ )
    randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));

    var lettersArray = randomLetters.split("");
    // lettersArray.push(lettersArray.shift());

     return lettersArray;
};

var randomizedLetters = randomize(4);

function possibleWords(lettersArray) {
  console.log("Letters Array: " + lettersArray);
 	for(i = 0; i <= lettersArray.length; i++) {
		var endOfWord = [];
  	endOfWord = lettersArray.slice(1, lettersArray.length)
    console.log("End of Word: " + endOfWord);
  	for(n = 0; n <= endOfWord.length; n++) {
 	 		console.log(lettersArray[0] + endOfWord.join(""));
      endOfWord.push(endOfWord.shift());
		}
    lettersArray.push(lettersArray.shift());
    console.log("New Letters Array:" + lettersArray);
	}
}

possibleWords(randomizedLetters);
