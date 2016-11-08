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
  var endOfWords = [];
 	for(i = 0; i < lettersArray.length; i++) {
		var endOfWord = [];
  	endOfWord = lettersArray.slice(1, lettersArray.length)
    endOfWords.push(endOfWord);
    console.log("End of Word: " + endOfWord);
  	for(n = 0; n < endOfWord.length; n++) {
 	 		console.log(lettersArray[0] + endOfWord.join(""));
      endOfWord.push(endOfWord.shift());
		}
    shrinkArray(lettersArray[i], endOfWords.slice(i, endOfWords.length));
    lettersArray.push(lettersArray.shift());
    console.log("New Letters Array:" + lettersArray);
	}
  shrinkArray(lettersArray[0], endOfWords.slice(0,3));
}

function shrinkArray(leadingLetter, endOfWords) {
  var prefixes = [];
  prefixes.push(leadingLetter);
  if(endOfWords.length < 2){
    return;
  } else {
    for(i = 0; i < endOfWords.length; i++) {
      prefixes.forEach(function (prefix) {

        console.log(prefix + endOfWords[i]);

      });
    }
    for(i = 0; i < endOfWords.length; i++) {
      possibleWords(endOfWords[i]);
    }
  }
}

var testData = ["1","2","3","4"];
possibleWords(testData);
