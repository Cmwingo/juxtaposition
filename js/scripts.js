function endGame() {
  $("#mainPage").hide();
  $("#endGame").fadeIn(300);
}
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // <----- clock resets to 1:00 when it hits 0
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            endGame();
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};




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
    $('#' + userInput).removeClass("crypto");
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

function getRandomLetters(random) {

  var combos = combinations(random);
  var found = possibleWords(combos);
  return found;
}

$(document).ready(function() {
  $("#play").on('click', function() {
    $("#mainPage").fadeIn(300);
    $("#homePage").hide();
  });
  var random = randomize(5);
  var found = getRandomLetters(random);
  var ranDisplay = showRandomLetters(random);

   while(found.length <= 5) {
    var random = randomize(5);
    found = getRandomLetters(random);
  }
  if(found.length >= 5) {
    found = deDup(found);
    found.forEach(function (word,i) {
      $("#words").append("<li class='crypto' id='" + word + "'>" + word + "</li>");
    });
  }
  ranDisplay.forEach(function (letter) {
  $(".letterGroup").append("<div class='letter well'>" + letter + "</div>");
});
  // $(document).keypress(function(event) {
  //   var keycode = event.keyCode || event.which;
  //   if(keycode == '13') {
  //     alert('You pressed a "enter" key in somewhere');
  //     // $("form#userText").submit();
  //   }
  // });

  $("form#userText").submit(function(event){
    alert("Submission");
    event.preventDefault();
    var userInput = $("#formInput").val().toLowerCase();
    alert(userInput);
    isWord(userInput, found);
    $("#formInput").val('');
  });
});
