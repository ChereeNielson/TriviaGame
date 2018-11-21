$(ready);

function ready(){
    let allQuestions = 
    [
        {
            question: "What is Indiana Jones' real first name?",
            choices: ["Indy", "Junior", "Henry", "Marcus"],
            answer: 2
        }, 

        {
            question: "What actor played the villain in the 1994 movie <i>Speed</i>?",
            choices: ["Keanu Reeves", "Dennis Hopper", "Howard Payne", "Jeff Daniels"],
            answer: 1
        },

        {
            question: "How many people were killed in the 1996 movie <i>Scream</i>?",
            choices: ["Seven", "Nine", "Six", "Five"],
            answer: 0
        },
        
        {
            question: "Which of these \"I am Jack\" lines is NOT uttered by the Narrator in the 1999 movie <i>Fight Club</i>?",
            choices: ["\"I am Jack's broken heart.\"", "\"I am Jack's enflamed sense of rejection.\"", "\"I am Jack's wasted life.\"", "\"I am Jack's complete lack of remorse.\""],
            answer: 3
        },

        {
            question: "Who told Chunk to do the \"Truffle Shuffle\" in the 1985 movie <i>The Goonies</i>?",
            choices: ["Brand", "Mikey", "Data", "Mouth"],
            answer: 3
        },

        {
            question: "Which 80s movie was the highest grossing film of the decade?",
            choices: ["Return of the Jedi", "E.T. <i>The Extraterrestrial</i>", "Ghostbusters", "Batman"],
            answer: 1
        },

        {
            question: "Who is Keyser Soze in the movie The <i>Usual Suspects</i>?",
            choices: ["Dean Keaton", "Michael Mcmanus", "Roger \“Verbal\” Kint", "Fred Fenster"],
            answer: 2
        }
    ];

    let score = 0;
    let number = 0;
    let question = $("#question");

}




let timeoutId = window.setTimeout(function() {

    $("#start").click(stopwatch.start);
  };

  let timeRemaining;
  let clockRunning = false;

  let stopwatch = {
        time: 0,
        lap: 1,

      reset: function() {
        stopwatch.time = 0;
        stopwatch.lap = 1;
        $("#display").text("00:00");
        $("#laps").text("");
      },

      start: function() {
        if (!clockRunning) {
            setInterval(stopwatch.start);
            intervalId = setInterval(increment, 1000);
        }
      },

      stop: function() {
        clearInterval(stopwatch.stop);
        clockRunning = false;
      },

      recordLap: function(){
        let converted = stopwatch.timeConverter(stopwatch.time);
        $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "<p>");
        stopwatch.lap++;
      },

      count: function() {
        stopwatch.time++;
        let converted = stopwatch.timeConverter(stopwatch.time);
        console.log(converted);
        $("#display").text(converted);
      },

      timeConverter: function(t) {
        let minutes = Math.floor(t / 60);
        let seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
    
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }
};