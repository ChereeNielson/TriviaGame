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

    
    
    // Create a 1 minute countdown timer //
    function beginTimer() {
        let seconds = 61;
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

    // Variables that connect to their $("#counterparts") //
    // let correctAnswer = $("#correctAnswers");
    // let wrongAnswer = $("#incorrectAnswers");
    // let unanswered = $("#unanswered");
    // let start = $("#startButton");
    // let timer = $("#timeRemaining")
    // let submit = $("#submit");
    // let restart = $("#buttonRestart");
    // let questions = $("#question")
    // let results = $("#results")
    // let quiz = $("#triviaContainer")
    // let correct = 0;
    // let wrong = 0;
    let correctAnswer = 0;
    let wrongAnswer = 0;
    let unanswered = 0;
    
    
    // Answers & Results //
    
    // let correctRadios = $("input:radio[value=correct]:checked").val();
    // console.log(correctRadios);
        // if(correctRadios = correctRadios.length)
    // correctAnswer++;
        //Checking to see if wrong radio button was clicked and incrementing wrong answers
    // let wrongRadios = $("input:radio[value=wrong]:checked").val();
    // console.log(wrongRadios);
        // if(wrongRadios = wrongRadios.length)
    // wrongAnswer++;

    // correctAnswer.text(correct);
    // wrongAnswer.text(wrong);
    // unanswered.text(unanswered);

    
    // To display the selected radio button value 
    // $("input:radio[name=first-name]:checked").val();

        // let userAnswer = [];
        // let selectedVal = "";
    // let question1 = $("input[name=results]").on("click", function(e){
    //     e.preventDefault();
    //     console.log($("input[name=first-name]:checked").val());
    // });
        // $("input[type='radio']").click(function() {
        //     let question1 = $("input[name='first-name']:checked").val();
        //     console.log(this.value);
            
        //     if(allQuestions[0].answer == question1) {
        //         correctAnswer ++;
        //     } else if (question1 == null) {
        //         unanswered ++;
        //     } else {
        //         wrongAnswer ++;
        //     }
        //     console.log($("input[name='first-name']:checked").val());
        // });
        
        
        
        //     // $("input:radio[name=first-name]")[0].checked = true;
        //     // console.log(this.value);

    // Answers & Results // 
    function getResults () {
        let question1 = $("input:radio[name=first-name]:checked").val();
        console.log(question1);
            if(allQuestions[0].answer == question1) {
                correctAnswer ++;
            } else if (question1 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question2 = $("input:radio[name=villain]:checked").val();
        console.log(question2);
            if(allQuestions[1].answer == question2) {
                correctAnswer ++;
            } else if (question2 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question3 = $("input:radio[name=killed]:checked").val();
        console.log(question3);
            if(allQuestions[2].answer == question3) {
                correctAnswer ++;
            } else if (question3 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question4 = $("input:radio[name=jack]:checked").val();
        console.log(question4);
            if(allQuestions[3].answer == question4) {
                correctAnswer ++;
            } else if (question4 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question5 = $("input:radio[name=chunk]:checked").val();
        console.log(question5);
            if(allQuestions[4].answer == question5) {
                correctAnswer ++;
            } else if (question5 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question6 = $("input:radio[name=grossing]:checked").val();
        console.log(question6);
            if(allQuestions[5].answer == question6) {
                correctAnswer ++;
            } else if (question6 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question7 = $("input:radio[name=keyser]:checked").val();
        console.log(question7);
            if(allQuestions[6].answer == question7) {
                correctAnswer ++;
            } else if (question7 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question8 = $("input:radio[name=signs]:checked").val();
        console.log(question8);
            if(allQuestions[7].answer == question8) {
                correctAnswer ++;
            } else if (question8 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question9 = $("input:radio[name=dude]:checked").val();
        console.log(question9);
            if(allQuestions[8].answer == question9) {
                correctAnswer ++;
            } else if (question9 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        let question10 = $("input:radio[name=edward]:checked").val();
        console.log(question10);
            if(allQuestions[9].answer == question10) {
                correctAnswer ++;
            } else if (question10 == null) {
                unanswered ++;
            } else {
                wrongAnswer ++;
            }
        
        allQuestions[0]
    }
        
        
    // Click "Get Results" button to reveal results //
    $("button#submit").click(function() {
        $("#results").css("display", "block");
        $("button#submit").css("display", "none");
        $("#triviaContainer").css("display", "none");
        $("#correctAnswers").html(correctAnswer);
        $("#incorrectAnswers").html(wrongAnswer);
        $("#unanswered").html(unanswered);
        getResults();
    });

    // Click "Start" button to reveal trivia questions //
    $("button#startButton").click(function() {
        $("#triviaContainer").css("display", "block");
        $("button#startButton").css("display", "none");
        
        // Begin timer countdown //
        beginTimer();   
    });
});