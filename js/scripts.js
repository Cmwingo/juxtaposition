


function randomize(length) {

  var randomLetters = "";
  var lettersArray = [];

  var letters = "abcdefghijklmnopqrstuvwxyz";

  for( var i=0; i < length; i++ )
    randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));

    var lettersArray = randomLetters.split("");
    lettersArray.push(lettersArray.shift());

    return lettersArray;

};

function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  return result;

};


function checkWords(words) {
  var foundWords = [];
  words.forEach(function(word) {
    if (Word_List.isInList(word)) {
      foundWords.push(word);
    }
  });
  return foundWords;
};
