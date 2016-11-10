function randomize(length) {
  var randomLetters = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var vowels = "aeiou"

  for( var i=0; i < length -1; i++ )
    randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));

    randomLetters += vowels.charAt(Math.floor(Math.random() * vowels.length));
    console.log(randomLetters);
    return randomLetters;
};

function showRandomLetters(letters) {
  var ranLettersArr = letters.split("");
  return ranLettersArr;

}

function shuffle(array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
  console.log(array);
}

function combinations(str) {
   var fn = function(active, rest, a) {
       if (!active && !rest)
           return;
       if (!rest) {
           a.push(active);
       } else {
           fn(active + rest[0], rest.slice(1), a);
           fn(active, rest.slice(1), a);
       }
       return a;
   }
   return fn("", str, []);
}

function permute(input) {
    var permArr = [];
    var usedChars = [];
    return (function main() {
        for (var i = 0; i < input.length; i++) {
            var ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            main();
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        var result = [];
        permArr.forEach(function (p) {
          result.push(p.join(''));
        });
        return result;
    })();
}

function possibleWords(combos) {
  var found = [];

  combos.forEach(function (combo) {
    var permutations = permute(combo.split(''));

    permutations.forEach(function (perm) {
      if (Word_List.isInList(perm) && perm.length >= 3){
        found.push(perm);
      }
    });
  });
    console.log(found);
    return found;
}


function isWord(userInput, wordList) {
  if(wordList.includes(userInput)) {
    alert("That's a word");
  } else {
  alert("That's not a word");
  }
}

function deDup(wordList) {
  wordList.forEach(function(word, i){
    var word = wordList[i];
    wordList.splice(i,1);
    if(!wordList.includes(word))
    {
      wordList.push(word);
    }
  });
  return wordList;
}

$(document).ready(function() {



  var random = randomize(5);
  var combos = combinations(random);
  var found = possibleWords(combos);
  var ranDisplay = showRandomLetters(random);


  console.log(ranDisplay);

  if (found.length >= 5) {
    found.forEach(function (word) {
      $("#words").append("<li>" + word + "</li>");
    });
  }

  ranDisplay.forEach(function (letter) {
    $("#random").append("<div class='letterOne well'>" + letter + "</div>");
  });

var shuffleRan = shuffle(ranDisplay);
shuffleRan.forEach(function (letter) {
$("#random").fadeIn("<div class='letterOne well'>" + letter + "</div>");
});
};

console.log(replaceSHIT);

  $("#shuffle").on('click', function() {
    $("#random li").text("");
    $("#letterOne well").append(replaceSHIT);

  });




  // $("form#userText").submit(function(event){
  //   alert("Submission");
  //   event.preventDefault();
  //   var userInput = $("#formInput").val();
  //   alert(userInput);
  //   isWord(userInput, found);
  //   $("#formInput").val('');
  // });
});
