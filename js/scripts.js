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
//      return lettersArray;
// };
//
// var randomizedLetters = randomize(4);
//
// function possibleWords(lettersArray) {
//   console.log("Letters Array: " + lettersArray);
//   var endOfWords = [];
//  	for(i = 0; i < lettersArray.length; i++) {
// 		var endOfWord = [];
//   	endOfWord = lettersArray.slice(1, lettersArray.length)
//     endOfWords.push(endOfWord);
//     console.log("End of Word: " + endOfWord);
//   	for(n = 0; n < endOfWord.length; n++) {
//  	 		console.log(lettersArray[0] + endOfWord.join(""));
//       endOfWord.push(endOfWord.shift());
// 		}
//     shrinkArray(lettersArray[i], endOfWords.slice(i, endOfWords.length));
//     lettersArray.push(lettersArray.shift());
//     console.log("New Letters Array:" + lettersArray);
// 	}
//   shrinkArray(lettersArray[0], endOfWords.slice(0,3));
// }
//
// function shrinkArray(leadingLetter, endOfWords) {
//   var prefixes = [];
//   prefixes.push(leadingLetter);
//   if(endOfWords.length < 2){
//     return;
//   } else {
//     for(i = 0; i < endOfWords.length; i++) {
//       prefixes.forEach(function (prefix) {
//
//         console.log(prefix + endOfWords[i]);
//
//       });
//     }
//     for(i = 0; i < endOfWords.length; i++) {
//       possibleWords(endOfWords[i]);
//     }
//   }
// }

function powerSet(array) {
  var set = [];
  var set2 = [];
  var set3 = [];
  set.push(array.join(''));
  for(i = 0; i < array.length; i++){
    var newSet3 = array.slice(1,array.length);
    console.log("New Set of 3: " + newSet3);
    // set3.push(newSet3.join(''));
    for(n = 0; n < newSet3.length; n++){
      var newSet2 = newSet3.slice(0,newSet3.length);
      console.log("New Set of 2: " + newSet2);
      set.push(newSet2.join(''));
      // set2.push(newSet2.shift());
      set3.push(newSet3.shift());
    };
    array.push(array.shift());
  };

  // set.push(set3);
  set.push(set2);
  console.log(set2);
  console.log(set3);
  console.log(set);
}
var testData = ["1","2","3","4"];
powerSet(testData);
// function possibleWords(letterArray, prevPrefix) {
//     for(i = 0; i < letterArray.length; i++) {
//       var prefix = letterArray[0];
//       var suffix = letterArray.slice(1, letterArray.length);
//       while(suffix.length != 2) {
//         prefix.push(suffix.shift());
//         if(suffix.length === 2) {
//           console.log(prefix + suffix [0] + suffix [1]);
//           console.log(prefix + suffix [1] + suffix [1]);
//         }
//       }
//
// function possibleWords(letterArray, prevPrefix) {
//   for(i = 0; i < letterArray.length; i++) {
//     prevPrefix.push(prevPrefix);
//     var prefix = letterArray.slice(0,i+1);
//     var suffix = letterArray.slice(i+1, letterArray.length);
//     console.log("Prefix: " + prefix);
//     console.log("Suffix: " + suffix);
//     if(suffix.length === 1) {
//       console.log(prevPrefix[i] + prefix + suffix);
//       console.log(prevPrefix[i] + suffix + prefix);
//       return;
//     } else {
//       console.log(prevPrefix[i] + prefix + suffix);
//       possibleWords(suffix, prefix);
//       suffix.push(suffix.shift());
//     }
//   }
//   letterArray.push(letterArray.shift());
// }
// var testData = ["1","2","3","4"];
// possibleWords(testData, []);
