// Creating Array of object for diiferent questions.
const myQuestions = [
    {
        question: "1. What is the capital of Bihar",
        answers: {
            a : "Patna",
            b : "Bhopal",
            c : "Rajstan",
            d : "jaipur"
        },
        correctAnswer: "a"
    },
    {
        question: "2. What is the square value of 4",
        answers: {
            a: 6,
            b: 16,
            c: 9,
            d: 16
        },
        correctAnswer: "b"
    },
    {
        question: "3. Which of the following is the correct syntax to declare a function in JavaScript?",
        answers: {
            a : "function myFunction{}",
            b : "function myFunction ()",
            c : "function myFunction",
            d : "function myFunction []"
        },
        correctAnswer: "b"
    },
    {
        question: "4. Following are the JavaScript Data types:",
        answers: {
            a : "Number",
            b : "Object",
            c : "Boolean",
            d : "Undefined"
        },
        correctAnswer: "b"
    },
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('btn');
const resultsContainer = document.getElementById('result');

function buildQuiz(){

    const output = []; // It contains question as well as option for each object.

    myQuestions.map((currentQuestion, questionNumber) =>{
        // currentQuestion contain Object of array and questionNumber contain index of array

        const options = []; // It contain all 4 option for each question.

        for(letter in currentQuestion.answers){
            options.push(`
            <label><input type="radio" name="question${questionNumber}" value="${letter}" > ${letter} : ${currentQuestion.answers[letter]} </label><br>
            `);
        }
        output.push(`
            <div class="question"> ${currentQuestion.question} </div>
            <div class="options"> ${options.join('')} </div>
        `);
    });
    quizContainer.innerHTML = output.join('');
}
buildQuiz();

function showResult(){
    const optionsContainers = quizContainer.querySelectorAll('.options');

    let totalCorrect = 0;

    myQuestions.map((currentQuestion, questionNumber) => {
        const optionContainer = optionsContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        // selector contain radio button which is checked or selected.
        const userAnswer = (optionContainer.querySelector(selector) || {} ).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            totalCorrect++;
            optionsContainers[questionNumber].style.color = 'green';
        } else {
            optionsContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `You got ${totalCorrect} out of ${myQuestions.length}`;
}

submitButton.addEventListener("click", showResult);