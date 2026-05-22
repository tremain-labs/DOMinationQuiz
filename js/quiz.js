// Grab elements from the page
const quizContainer = document.querySelector('.quiz-container')
const scoreContainer = document.querySelector('.score-container')
const questionsContainer = document.querySelector('.questions-container')
const optionsContainer = document.querySelector('.options-container')
const nextButton = document.querySelector('.next-button')

// Track quiz state
let currentQuestion = 0;
let score = 0;

for (let i = 0; i < questions.length; i++) {
    const question = questions[i]
}


// The quiz questions and answers
const quizData = [ 
    {
        question: "How do you print to the console in JavaScript?",
        options: [ "console.log()", "print()", "document.write()", "alert()" ],
        answer: 0
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: [ " myVar = 5;", "let myVar = 5;", "const myVar = 5;", "All of the above" ],
        answer: 3
    }

];