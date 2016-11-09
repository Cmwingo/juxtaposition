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
//     var prefix = letterArray.slice(0,1);
//     var suffix = letterArray.slice(1, letterArray.length);
//     console.log("Prefix: " + prefix);
//     console.log("Suffix: " + suffix);
//     // debugger;
//     if(suffix.length === 2) {
//       console.log(prevPrefix + prefix + suffix);
//       suffix.push(suffix.shift());
//       console.log(prevPrefix + prefix + suffix);
//       suffix.push(suffix.shift());
//       // possibleWords(letterArray, prevPrefix);
//       // return;
//     } else if(suffix.length === 1) {
//       return;
//     } else {
//       console.log(prevPrefix + prefix + suffix);
//       prevPrefix.push(prefix);
//       suffix.push(suffix.shift());
//     }
//     letterArray.push(letterArray.shift());
//     console.log(prefix + suffix);
//     possibleWords(suffix, prefix);
//     return;
//   }
// }
// function possibleWords(letterArray, prevPrefix) {
//   for(i = 0; i < letterArray.length; i++) {
//     var prefix = letterArray.slice(0,1);
//     console.log("Prefix: " + prefix);
//     var suffix = letterArray.slice(1, letterArray.length);
//     console.log("Suffix: " + suffix);
//     if(suffix.length === 1){
//       return;
//     } else {
//       possibleWords(suffix, prefix);
//     }
//     console.log(prevPrefix + prefix + suffix);
//     letterArray.push(letterArray.shift());
//     prefix = letterArray.slice(0,1);
//     console.log("New Prefix: " + prefix);
//     suffix = letterArray.slice(1, letterArray.length);
//     console.log("New Suffix: " + suffix);
//     console.log(prevPrefix + prefix + suffix);
//   }
// }

// function possibleWords(letterArray, prevPrefix) {
//   for(i = 0; i < letterArray.length; i++) {
//     var prefix = letterArray.slice(0,1);
//     console.log("Prefix: " + prefix);
//     var suffix = letterArray.slice(1, letterArray.length);
//     console.log("Suffix: " + suffix);
//     for(n = 0; n < suffix.length; n++) {
//       console.log(prevPrefix + prefix + suffix);
//       if(suffix.length === 1) {
//         console.log(prevPrefix + suffix + prefix);
//         console.log(prevPrefix + prefix + suffix);
//         return;
//       } else {
//         suffix.push(suffix.shift());
//         possibleWords(suffix, prefix);
//       }
//     }
//   return;
//   }
// }

// function permute(letterArray, prevPrefix) {
//   var prefix = letterArray.slice(0,1);
//   console.log("Prefix: " + prefix);
//   var suffix = letterArray.slice(1, letterArray.length);
//   console.log("Suffix: " + suffix);
//   if(suffix.length === 1){
//     console.log(prevPrefix + prefix + suffix);
//     var temp = letterArray[0];
//     letterArray[0] = letterArray[1];
//     letterArray[1] = temp;
//     console.log(prevPrefix + suffix + prefix);
//     return;
//   }
//   permute(suffix, prefix);
//   // prefix = prevPrefix + prefix;
//   letterArray.push(letterArray.shift());
//   var prefix = letterArray.slice(0,1);
//   console.log("New Prefix: " + prefix);
//   var suffix = letterArray.slice(1, letterArray.length);
//   console.log("New Suffix: " + suffix);
//   permute(suffix, prefix);
//   if(prefix.length < suffix.length) {
//     letterArray.push(letterArray.shift());
//     permute(letterArray, []);
//   }
//   else {
//     return;
//   }
// }

function permute(letterArray, prevPrefix) {
  var prefix = letterArray.slice(0,1);
  var suffix = letterArray.slice(1, letterArray.length);
  var i = 0;
  var permArray = [];
  // if(suffix.length === 1) {
  //   return;
  // }
  console.log("Prev Prefix: "+ prevPrefix + "Prefix: " + prefix);
  console.log("Suffix: " + suffix);
  for(i = i; i < letterArray.length; i++) {
    letterArray.push(letterArray.shift());
    if(letterArray.length === 2)
    {
      debugger;
      break;
    }
    if(letterArray.length === 1){
      break;
    }
    permArray.push(prevPrefix + prefix + suffix);
    permute(suffix, prefix);
  }
  letterArray.push(letterArray.shift());
  return permArray;
}
var testData = ["1","2","3","4"];
permArray = permute(testData, []);
console.log(permArray);
