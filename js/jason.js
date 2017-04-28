
var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct = 0;

quizAnswers = [];

var questions=[
    {
        question: "What team does messi play for?",//question
		correctAnswer: "Barcelona",//right answer to question 
		
		//list of multiple choice answers
		answer0: "Chelsea",
		answer1: "Barcelona",
		answer2: "Real madrid",
		answer3: "Arsenal"
    },
    {
	    question: "Who won the 2015/16 premier leauge?",//question
		correctAnswer: "leicester",//right answer to question 
		
	    //list of multiple choice answers
		answer0: "leicester",
		answer1: "Man u",
		answer2: "Man city",
		answer3: "Chelsea"
    },
	{
	    question: "Who won the 2014 world cup?",//question
		correctAnswer: "Germany",//right answer to question 
		
		//list of multiple choice answers
		answer0: "Brazil",
		answer1: "Italy",
		answer2: "Spain",
		answer3: "Germany"
	},
	{
		question: "What basketball team does Lebron James play for?",//question
		correctAnswer: "Clevland Calvaliers",//right answer to question 
		
		//list of multiple choice answers 
		answer0: "Houston Rockets",
		answer1: "Clevland Calvaliers",
		answer2: "Golden State Warriors",
		answer3: "LA Lakers"
	},
	{
		question: "Who won the 2015 six nations?",//question 
		correctAnswer: "Lreland",//right answer to quesion 
		
		//list of multiple choice answers
		answer0: "England",
		answer1: "Wales",
		answer2: "Scotland",
		answer3: "Lreland"
		
	},
	{
		question: "what Country does Harry Kane play for?",//question
		correctAnswer: "England",//right answer to question
		
		//list of multiple choice answers
		answer0: "England",
		answer1: "Portugal",
		answer2: "Poland",
		answer3: "Wales"
	},
	{
		quesion: "Who won the 2015 FA cup?",//question 
		correctAnswer: "man u",//right answer to question 
		
		//list of multiple choice answers 
		answer0: "Arsenal",
		answer1: "Tottenham",
		answer2: "Chelsea",
		answer3: "Man u"
	},
	{
		question: "what boxer has won all his matchs by K.O and is 18-0?",//question
		correctAnswer: "Anthony Joshua",//right answer to question 
		
		//list of multiple choice answers
		answer0: "Dillion Whyt", 
		answer1: "David Haye",
		answer2: "Anthony Joshua",
		answer3: "Chris Duff"
	},
	{ 
	    question: "Who is Micheal Van Gerwin?",//question
		correctAnswer: "Darts Player",//right answer to question 
		
		//list of multiple choice answers
		answer0: "Soccer Player",
		answer1: "Basketball Player",
		answer2: "Darts Player",
		answer3: "Golf Player"
	},
	{
		question: "What Team did David luiz sign for this season?",//question
		correctAnswer: "Chelsea",//right answer to question 
		
		//list of multiple choice answers 
		answer0: "West Ham",
		answer1: "Juventus",
		answer3: " AC Milan",
		answer3: "Chelsea"
	},
	{
		question: "What country is MONOCO fc in?",//question
		correctAnswer: "France",//right answer to question
		
		//list of multiple choice answers 
		answer0: "Brazil",
		answer1: "France",
		answer2: "Italy",
		answer3: "Spain"
	},
	{
		question: "who won the 2015/16 Mvp?",//question
		correctAnswer: "Stephen Curry",//right answer to question 
		
		//list of multiple choice answers 
		answer0: "Lebron James",
		answer1: "Stephen Curry",
		answer2: "Kevin Durant",
		answer3: "Micheal Jordan"
	},
	{
		question: "Who was Muhammad Ali?",//question
		correctAnswer: "Boxer",//right answer to question 
		
		//list of multiple choice answers
		answer0: "Boxer",
		answer1: "Soccer player",
		answer2: " Gaelic player",
		answer3: "hockey Player"
	},
	{
		question: "who won the 2016 gaa all lreland?",//question
		correctAnswer: "Dublin",//right answer to question 
		
		//list of multiple choice answers
		answer0: "Donegal",
		answer1: "Kerry",
		answer2: "Mayo",
		answer3: "Dublin"
	},
	{
		question: "who won the 2016 gaa Hurling all lreland?",//question
		correctAnswer: "Tipperary",//right answer to queston
		
		//list of multiple choice answers
		answer0: "Tipperary",
		answer1: "Galway",
		answer2: "Kilkenny",
		answer3: "Clare"
	},
	{
		question: "who won 2016 gaa player of the year?",//question
		correctAnswer: "Brian Fenton",//right answer to question 
		
		//list of multiple choice answers
		answer0: "Colm Cooper",
		answer1: "Brian Fenton",
		answer2: "Bernard Brogan",
		answer3: "Lee Keegan"
	},
	{
		quesion: "who won the 2016 premier leauge player of the year?",//question
		correctAnswer: "Kante",//right answer to question 
		
		//list of multiple choice answers 
		answer0: "Eden Hazard",
		answer1: "Ozil",
		answer2: "jamie Vardy",
		answer3: "Kante"
	},
	{
		question: "who has won the most champions leauge?",//question
		correctAnswer: "Real Madrid",//right answer to question 
		
		//list of multiple choice answers 
		answer0: "Real Madrid",
		answer1: "Barcelona",
		answer2: "Arsenal",
		answer3: "Chelsea"
	},
	{
		question: "What country does Robbie Henshaw play for?",//question
		correctAnswer: "Lreland",//right answer to question 
		
		//list of multiple choice answers
		answer0: "France",
		answer1: "Italy",
		answer2: "Lreland",
		answer3: "England"
	},
	{
		question: " tim howard is a refugree in the premier leauge?",//
		correctAnswer: "true",//right answer to question 
		
		//list of multiple choice answers
		answer0: "true",
		answer1: "false",
		answer2: "Lreland",
		answer3: "England"
	}
]; 

//function which takes an array and shuffles its contents
//used to get different order of multiple choice answers every time quiz is taken
function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}

function _(x) {
	return document.getElementById(x);
}

function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)//If position is greater or equal to the length of question, ie 20
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2>";//Print # correct out of 20
        _("test_status").innerHTML += "  Thank you for completing the quiz";//Print "thank you .... "
        pos = 0;
        correct = 0; 
        return false; 
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    //Print questions and increment by one each iteration

    var bar=document.getElementById("progressBar");//Progress bar value
    bar.value = (pos+1);//Progress bar increments as we go through questions, starts at 1

    //console.log("Pos value is " + pos);//write this to console

    //push all potential answers to the quizAnswers array
    quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    quizAnswers[3] = questions[pos].answer3;
	
	
    
    console.log("Unshuffled answers" + quizAnswers);
    
    //Shuffle the answers
    var shuffledAnswers = shuffleArray(quizAnswers);
    
    console.log("Shuffled answers" + shuffledAnswers);
    
    question = questions[pos].question;//question is in position 0 in the array(zero indexed)
    choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
    choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
    choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
    choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array
    
    test.innerHTML = "<h3>"+question+"</h3>"; //questions are written in h3 size
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; //Radio button
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";//on clicking submit button, it checks your answers
}
		
		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); //Creates an array
    for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
    { 
        if(choices[i].checked) //if a choice is checked
        { 
            choice = choices[i].value; //Take the value of that choice and put it into choice
        }
    } 
    console.log("Chosen answer is " + choice);
    if(choice == questions[pos].correctAnswer)//If the value of choices is equal to the answer
    { 
        alert('Correct!');//Alert correct
        correct++;//Increment your correct answers by one
    }
    else//or else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
    } 
    pos++; //Increment position by one ie go on to the next question
    
    renderQuestion(); //go to render question again
}

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);