$(document).ready(function () {

    let allQuestions = [
        {
            question: "What is Indiana Jones' real first name?",
            choices: ["Indy", "Junior", "Henry", "Marcus"],
            answer: "henry"
        }, 

        {
            question: "What actor played the villain in the 1994 movie <i>Speed</i>?",
            choices: ["Keanu Reeves", "Dennis Hopper", "Howard Payne", "Jeff Daniels"],
            answer: "dennis hopper"
        },

        {
            question: "How many people were killed in the 1996 movie <i>Scream</i>?",
            choices: ["Seven", "Nine", "Six", "Five"],
            answer: "seven"
        },
        
        {
            question: "Which of these \"I am Jack\" lines is NOT uttered by the Narrator in the 1999 movie <i>Fight Club</i>?",
            choices: ["\"I am Jack's broken heart.\"", "\"I am Jack's enflamed sense of rejection.\"", "\"I am Jack's wasted life.\"", "\"I am Jack's complete lack of remorse.\""],
            answer: "remorse"
        },

        {
            question: "Who told Chunk to do the \"Truffle Shuffle\" in the 1985 movie <i>The Goonies</i>?",
            choices: ["Brand", "Mikey", "Data", "Mouth"],
            answer: "mouth"
        },

        {
            question: "Which 80s movie was the highest grossing film of the decade?",
            choices: ["Return of the Jedi", "E.T. <i>The Extraterrestrial</i>", "Ghostbusters", "Batman"],
            answer: "et"
        },

        {
            question: "Who is Keyser Soze in the movie <i>The Usual Suspects</i>?",
            choices: ["Dean Keaton", "Michael Mcmanus", "Roger \“Verbal\” Kint", "Fred Fenster"],
            answer: "verbal"
        },

        {
            question: "In <i>Signs</i>, what does Mel Gibson tell Joaquin Phoenix when they’re confronting the alien?",
            choices: ["\"Swing away.\"", "\"RUN!\"", "\"Hold still. They don’t see you if you don’t move.\"", "\"Grab the gun.\""],
            answer: "swing"
        }, 

        {
            question: "In <i>The Big Lebowski</i>, what ties the Dude's room together?",
            choices: ["the lamp", "the rug", "the ottoman", "the chair"],
            answer: "rug"
        },

        {
            question: "What is Edward grilling at the neighborhood barbeque in the movie <i>Edward Scissorhands</i>?",
            choices: ["steak", "ribs", "shish kebobs", "burgers"],
            answer: "kebobs"
        }
    ];

    // Variables that connect to their $Counterparts //
    let timer = $("#timer");
    let startButton = $("#startButton");

    // Variables for score 
    let score = 0;
    let number = 0;
    let question = $("#question");
    let choice1 = $("#answer0");
    let choice2 = $("#answer1");
    let choice3 = $("#answer2");
    let choice4 = $("#answer3");
    let next = $("#next");
    let back = $("back");
    let correctAnswer = 0;
    let wrongAnswer = 0;
    let unanswered = 0;


    function beginTimer() {
        let seconds = 121;
        setInterval(function() {
            seconds--;
            if (seconds >= 0) {
                var minutes = Math.floor(((seconds * 1000) % (1000 * 60 * 60)) / (1000 * 60));
                var x = Math.floor(((seconds * 1000) % (1000 * 60)) / 1000);
                $("#timeRemaining").html(minutes + ":" + x);
            }
            if (seconds == 0) {
                clearInterval(seconds);
                $("#triviaContainer").css("display", "none");
                $("#results").css("display", "block");
            }
        }, 1000); 
        
    }

    function getResults() {
        let userAnswer = [];
        let selectedVal = "";
        let question1 = $("input[type='radio'][name='first-name']:checked").val();
            if(allQuestions[0].answer == question1) {
                correctAnswer ++;
            } else if (question1 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            };
        let question2 = $("input[type='radio'][name='villian']:checked").val();
            if(allQuestions[1].answer == question2) {
                correctAnswer ++;
            } else if (question2 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question3 = $("input[type='radio'][name='killed']:checked").val();
            if(allQuestions[2].answer == question3) {
                correctAnswer ++;
            } else if (question3 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question4 = $("input[type='radio'][name='jack']:checked").val();
        let question5 = $("input[type='radio'][name='chunk']:checked").val();
        let question6 = $("input[type='radio'][name='grossing']:checked").val();
        let question7 = $("input[type='radio'][name='keyser']:checked").val();
        let question8 = $("input[type='radio'][name='signs']:checked").val();
        let question9 = $("input[type='radio'][name='dude']:checked").val();
        let question10 = $("input[type='radio'][name='edward']:checked").val();
        allQuestions[0]
        // print out results $("#timeRemaining").html(minutes + ":" + x); //
    }

    // Click start button to reveal trivia questions //

    $("button#startButton").click(function() {
        $("#triviaContainer").css("display", "block");
        $("button#startButton").css("display", "none");
        
    // Create a 2 minute countdown timer //

        beginTimer();
          
    });
});