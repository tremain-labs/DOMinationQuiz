// Grab elements from the page
const startButton = document.querySelector('.start-button')
const quizContainer = document.querySelector('.quiz-container')
const scoreContainer = document.querySelector('.score-container')
const questionsContainer = document.querySelector('.questions-container')
const optionsContainer = document.querySelector('.options-container')
const nextButton = document.querySelector('.next-button')

// Track quiz state
let currentQuestion = 0;
let score = 0;

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

// Load the current question

function loadQuestion() {
    const question = quizData[currentQuestion]
    questionsContainer.textContent = question.question
    optionsContainer.textContent = ""
    
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button')
        optionButton.textContent = option
        optionButton.addEventListener('click', () => selectOption(index))
        optionsContainer.appendChild(optionButton)
    })
}

startButton.addEventListener('click', () => {
    startButton.classList.add('hidden')  // hide start button
    loadQuestion()                        // show first question
})