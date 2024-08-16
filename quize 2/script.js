const question = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: "false"},
            { text: "Blue Whale", correct: "true"},
            { text: "Elephant", correct: "false"},
            { text: "Giraffe", correct: "false"}

        ]
    },
    {
        question: "which is the largest continent in the world?",
        answers: [
            { text:"asia", correct: "true"},
            { text:"europe", correct: "false"},
            { text:"america", correct: "false"},
            { text:"australia", correct: "false"}
        ]
    },
    {
        question: "which is the largest country in the world?",
        answers: [
            { text:"russia", correct: "true"},
            { text:"canada", correct: "false"},
            { text:"china", correct: "false"},
            { text:"america", correct: "false"}
        ]
    },
    {
        question: "which is the smallest country in the world?",
        answers: [
            { text:"nepal", correct: "false"},
            { text:"vetican city", correct: "true"},
            { text:"miami", correct: "false"},
            { text:"bhuttan", correct: "false"}
        ]
    },
    {
        question: "Who wrote the play \"Romeo and Juliet\"?",
        answers: [
            { text:"William Shakespeare", correct: "false"},
            { text:"Charles Dickens", correct: "false"},
            { text:"Jane Austen", correct: "false"},
            { text:"Mark Twain", correct: "true"}
        ]
    },
    {
        question: "Which planet is known as the \"Red Planet\"",
        answers: [
            { text:"Venus", correct: "false"},
            { text:"Mars", correct: "true"},
            { text:"Jupiter", correct: "false"},
            { text:"Saturn", correct: "false"}
        ]
    },{
        question: "What is the largest mammal in the world?",
        answers: [
            { text:"Elephant", correct: "false"},
            { text:"Giraffe", correct: "flase"},
            { text:"Blue Whale", correct: "true"},
            { text:"Dolphin", correct: "false"}
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        answers: [
            { text:"Oxygen", correct: "false"},
            { text:"Carbon dioxide", correct: "true"},
            { text:" Nitrogen", correct: "false"},
            { text:"Hydrogen", correct: "false"}
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text:"Heart", correct: "false"},
            { text:"Brain", correct: "false"},
            { text:"Liver", correct: "false"},
            { text:"Skin", correct: "true"}
        ]
    },
    {
        question: "Who is known as the father of modern physics?",
        answers: [
            { text:"Isaac Newton", correct: "false"},
            { text:"Albert Einstein", correct: "true"},
            { text:"Galileo Galilei", correct: "false"},
            { text:"Johannes Kepler", correct: "false"}
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text:"Go", correct: "false"},
            { text:"Ag", correct: "false"},
            { text:"Au", correct: "true"},
            { text:"Gd", correct: "false"}
        ]
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        answers: [
            { text:"Respiration", correct: "false"},
            { text:"Photosynthesis", correct: "true"},
            { text:"Digestion", correct: "false"},
            { text:"Fermentation", correct: "false"}
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text:"Japan", correct: "true"},
            { text:"China", correct: "false"},
            { text:"South Korea", correct: "false"},
            { text:"Thailand", correct: "false"}
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text:"Venus", correct: "false"},
            { text:"Earth", correct: "false"},
            { text:"Jupiter", correct: "true"},
            { text:"Uranus", correct: "false"}
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text:"O2", correct: "false"},
            { text:"H2O", correct: "true"},
            { text:"CO2", correct: "flase"},
            { text:"NaCl", correct: "false"}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text:"Vincent van Gogh", correct: "false"},
            { text:"Pablo Picasso", correct: "false"},
            { text:"Leonardo da Vinci", correct: "true"},
            { text:"Michelangelo", correct: "false"}
        ]
    },
    {
        question: "What is the national flower of India?",
        answers: [
            { text:"Rose", correct: "false"},
            { text:"Lotus", correct: "true"},
            { text:"Sunflower", correct: "false"},
            { text:"Tulip", correct: "false"}
        ]
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answers: [
            { text:"Oxygen", correct: "false"},
            { text:"Carbon dioxide", correct: "false"},
            { text:"Nitrogen", correct: "true"},
            { text:"Hydrogen", correct: "false"}
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text:"Benjamin Franklin", correct: "false"},
            { text:"Thomas Jefferson", correct: "false"},
            { text:"John Adams", correct: "false"},
            { text:"George Washington", correct: "true"}
        ]
    },
    {
        question: "Which continent is home to the Sahara Desert?",
        answers: [
            { text:"Asia", correct: "false"},
            { text:"Africa", correct: "true"},
            { text:"South America", correct: "false"},
            { text:"Australia", correct: "false"}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text:"Atlantic Ocean", correct: "false"},
            { text:"Indian Ocean", correct: "false"},
            { text:"Pacific Ocean", correct: "true"},
            { text:"Arctic Ocean", correct: "false"}
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text:"Yen", correct: "true"},
            { text:"Won", correct: "false"},
            { text:"Yuan", correct: "false"},
            { text:"Euro", correct: "false"}
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            { text:"Neptune", correct: "false"},
            { text:"Mars", correct: "false"},
            { text:"Mercury", correct: "true"},
            { text:"Venus", correct: "false"}
        ]
    },
    {
        question: "Which famous scientist developed the theory of general relativity?",
        answers: [
            { text:"Isaac Newton", correct: "false"},
            { text:"Albert Einstein", correct: "true"},
            { text:"Stephen Hawking", correct: "false"},
            { text:"Charles Darwin", correct: "false"}
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuetionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuetionIndex = 0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuetion = question[currentQuetionIndex];
    let questionNo = currentQuetionIndex + 1;
    questionElement.innerHTML = questionNo +". "+ currentQuetion.question;
    currentQuetion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuetionIndex++;
    if(currentQuetionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }

}



nextButton.addEventListener("click", ()=>{
    if(currentQuetionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();