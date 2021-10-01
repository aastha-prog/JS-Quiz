const quizDB = [
    {
        question: "Q1 : Well, maybe I don’t need your money. One of the most successful characters by the end of the show Rachel Green, played by Jennifer Aniston, was shown penniless and dependent on her father. Can you complete this famous dialogue of hers from the sitcom?",
        a: "You're gonna love it",
        b: "The one thing that's ours!",
        c: "Is it me?",
        d: "Wait, wait, I said maybe!",
        ans: "ans4"
    },

    {
        question: " Q2: Joey doesn’t share....One of the most beloved characters on the show, Matt LeBlanc playing Joey Tribbiani said this phrase.Can you complete his iconic dialogue?",
        a: "Food",
        b: "Work",
        c: "Money",
        d: "Friend",
        ans: "ans1"
    },

    {
        question: " Q3 : What’s not to like?.Fans of the sitcom found Joey Tribbiani as one of the most relatable characters for his love for food.Can you complete his love confession for food ?",
        a: "Custard: good. Jam: good. Meat: good!",
        b: "don’t know. I’ve never had to use the other one.",
        c: "Cheese. It’s milk that you chew.",
        d: "This parachute is a knapsack!",
        ans: "ans1"
    },

    {
        question: "Q4 : These are just feelings..Joey Tribbiania played the ultimate ladies' man in the sitcom. Can you complete one of his phrases in the sitcom?",
        a: "I look a woman up and down and say, 'How you doin?",
        b: "You can’t just give up! Is that what a dinosaur would do?",
        c: "We were on a break!",
        d: "They’ll go away",
        ans: "ans4"
    },

    {
        question: "Q5 : It's so exhausting,..Some of the most relatable dialogues were delivered by Phoebe Buffay on the show.can you complete this iconic dialogue of hers?",
        a: "Waiting for death.",
        b: "Just take off your shirt and tell us.",
        c: "Oh. My. God.",
        d: "And I have to live with a boy!",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const ShowScore = document.querySelector('#ShowScore');
let questionCount = 0;
let score = 0;


const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        ShowScore.innerHTML = `
        <h3> Your Score is ${score}/${quizDB.length} </h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;

        ShowScore.classList.remove('ScoreArea');
    }
});


