var ques = 0;
var test =  document.getElementById("quiz");
var question = document.getElementById("question");

var btn = document.querySelector(".btn");
var quizEl = document.querySelector("#quiz");
var timerEl = document.querySelector("#time");

var buttonClickHandler = function () {
   btn();
}


function quiz (buttonClickHandler) {
question = 0
if (test = 0<question.length, ques++);
}





/* question and answer in a string*/
var test =  [
    {
        question: "How do you create a folder in your git bash?", 
        a: "mkdir",
        b: "touch",
        c: "cd",
        d: "ls",
    },
    {
        question: "Where in the HTML file do you place the javascript file?",
        a: "header",
        b: "body",
        c: "head",
        d: "div",
    },
    {
         question: "Which heading is larger because of its significance and scope?", 
        a: "h4",
        b: "h3",
        c: "h7",
        d: "h1",
    },
    {
         question: "If the image is important what should you use to make the content more accessible for everyone?", 
        a: "<article>",
        b: "alt",
        c: "float",
        d: "<nav>",
    },
   { 
        question: "What does the Git command git branch do?",
        a: "Show you the branches you have created and which one you are in.",
        b: "Takes you into the branch you want to go in", 
        c: "Creates a new branch", 
        d: "Sends your repository to your remote repository.",
    },

]

        var answers = [
    {
        a: "mkdir",
    },
    {
        b: "body",
    },
    {
        d: "h1",
    },
    {
        b: "alt",
    },
    {
        a: "show you the branches you have created and which one you are in",
    },]
    quiz();
  btn.addEventListener("click", buttonClickHandler);
