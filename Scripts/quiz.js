// Quiz questions
const questions = [
    {
        q: "1. Where did Rizal complete his medical degree?",
        options: ["University of Santo Tomas", "Ateneo Municipal", "Universidad Central de Madrid", "University of Heidelberg"],
        ans: 2
    },
    {
        q: "2. Which novel is known as 'The Reign of Greed'?",
        options: ["Noli Me Tángere", "El Filibusterismo", "Mi Ultimo Adios", "La Solidaridad"],
        ans: 1
    },
    {
        q: "3. What was the name of the Irish woman Rizal lived with in Dapitan?",
        options: ["Leonor Rivera", "Segunda Katigbak", "Josephine Bracken", "Maria Clara"],
        ans: 2
    },
    {
        q: "4. Why did Rizal leave the University of Santo Tomas?",
        options: ["He failed his classes", "He felt discriminated against by Dominican friars", "He ran out of money", "He was expelled"],
        ans: 1
    },
    {
        q: "5. What did Simoun plan to use to blow up the wedding feast in El Filibusterismo?",
        options: ["A crate of dynamite", "A kerosene lamp", "A cannon", "A poisoned drink"],
        ans: 1
    }
];

let score = 0;
let answered = 0;

// Initialize the quiz
function initQuiz() {
    score = 0;
    answered = 0;
    document.getElementById('score-display').innerText = '';
    const container = document.getElementById('quiz-container-display');
    let html = '';

    // Generate quiz questions
    questions.forEach((item, qIndex) => {
        html += `<div style="margin-bottom: 30px;">
            <p style="font-weight:bold; font-size:1.1rem;">${item.q}</p>
            <div id="q${qIndex}" data-answered="false">`;
        
        item.options.forEach((opt, oIndex) => {
            html += `<span class="option" onclick="checkAnswer(${qIndex}, ${oIndex}, ${item.ans})">${opt}</span>`;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;

    // Attach retry button functionality
    const retryBtn = document.querySelector(".retry-btn");
    if (retryBtn) {
        retryBtn.addEventListener("click", () => {
            initQuiz();           // Reload quiz
            window.scrollTo(0, 0); // Scroll to top
        });
    }
}

// Check answer logic
function checkAnswer(qIndex, oIndex, correctIndex) {
    const qDiv = document.getElementById(`q${qIndex}`);
    if(qDiv.getAttribute('data-answered') === 'true') return;

    qDiv.setAttribute('data-answered', 'true');
    answered++;

    const opts = qDiv.getElementsByClassName('option');

    if(oIndex === correctIndex) {
        opts[oIndex].classList.add('correct');
        score++;
    } else {
        opts[oIndex].classList.add('wrong');
        opts[correctIndex].classList.add('correct');
    }

    if(answered === questions.length) {
        document.getElementById('score-display').innerText = `You scored ${score} out of ${questions.length}`;
    }
}

// Initialize quiz on page load
document.addEventListener("DOMContentLoaded", initQuiz);
