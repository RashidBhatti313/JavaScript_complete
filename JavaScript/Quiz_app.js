const quizData = [{
    question: "Which of the following is a client-side language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "b",
},
{
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "<css>",
    b: "<script>",
    c: "<style>",
    d: "<html>",
    correct: "c",
},
{
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <body> section",
    b: "The <head> section",
    c: "Both the <head> and <body> section",
    d: "None of the above",
    correct: "c",
},
{
    question: "How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World');",
    b: "alertBox('Hello World');",
    c: "msg('Hello World');",
    d: "alert('Hello World');",
    correct: "d",
},
{
    question: "Which HTML tag is used to define an unordered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<list>",
    correct: "a",
},
{
    question: "Which property is used to change the background color in CSS?",
    a: "color",
    b: "bgcolor",
    c: "background-color",
    d: "backgroundColor",
    correct: "c",
},
{
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script src='xxx.js'>",
    b: "<script href='xxx.js'>",
    c: "<script ref='xxx.js'>",
    d: "<script name='xxx.js'>",
    correct: "a",
}
];

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);






// var questions = [
//     {
//         question: "HTML STands for",
//         options: [
//             "HyperText Markup Language",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "HyperText Markup Language",
//     },
//     {
//         question: "CSS STands for",
//         options: [
//             "Cascading Style sheet",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "Cascading Style sheet",
//     },
//     {
//         question: "JS STands for",
//         options: [
//             "JavaScript",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "JavaScript",
//     },
//     {
//         question: "USB stands for",
//         options: [
//             "Universal service Bus",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "Universal service Bus",
//     },
//     {
//         question: "Facebook which app",
//         options: [
//             "Socail App",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "Socail App",
//     },
//     {
//         question: "PC stand for",
//         options: [
//             "Personal Computer",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "Personal Computer",
//     },
//     {
//         question: "DOM stand for",
//         options: [
//             "Documentation Objects Model",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "Documentation Objects Model",
//     },
//     {
//         question: "MCQS stand for",
//         options: [
//             "Multiple choice Questions",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "Multiple choice Questions",
//     },
//     {
//         question: "P stand for",
//         options: [
//             "Paragraph",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "Paragraph",
//     },
//     {
//         question: "RP stand for",
//         options: [
//             "Royal Pass",
//             "Incorrect",
//             "Incorrect",
//             "Incorrect",
//         ],
//         correctAnswer: "Royal Pass",
//     },
    
// ]


// var totalQuestionNo = document.getElementById("totalQuestionNo");
// var question = document.getElementById("question");
// var options = document.getElementById("options");


// var currentIndex = 0;

// function renderQuestion() {
//     currentQuestionNo.innerHTML = currentIndex + 1;
//     totalQuestionNo.innerHTML = questions.length;
//     question.innerHTML = questions[currentIndex].question;

//     for (var i = 0; i < questions[currentIndex].options.length; i++) {
        
//         var op = allQuizQuestions[currentIndex].options[i];
    
//         options.innerHTML += ``

//     }
// }
// renderQuestion();



// function nextQuestion() {
//     currentIndex++;
//     renderQuestion();
// }

// function checkQuestion(a, b) {
//     if (a == b) {
//         marks++;
//     }
//     nextQuestion();
// }


// var search = document.getElementById("search")
// function searchresult() {

//     for (var i = 0; i< data.length; i++){
//         var std = data[i]
//         if (std.rollNo == search.value)
//             console.log(std.result);
//     }
    
// }