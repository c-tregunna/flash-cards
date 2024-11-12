
const welcomeText = document.getElementById("welcome-message")
const modal = document.querySelector(".modal")
const flashCard = document.getElementById("flash-card")
const flashCardAnswer = document.getElementById("flash-card-answer")
const subjects = document.querySelector(".subject-list")
const haribo = document.getElementById("haribo")
const film = document.getElementById("film")
const music = document.getElementById("music")
const goats = document.getElementById("goats")

let nameUser = localStorage.getItem("user-name")
let subject = localStorage.getItem("subject-dropdown")

welcomeText.textContent = `
        Hello ${nameUser}. Do you really want to test your knowledge on ${subject}? Na, didn't think so. Instead, why not pick from these far more interesting subjects. Have fun
        `

subjects.addEventListener('click', (e) => {
        welcomeText.classList.add("hidden")
        flashCard.classList.remove("hidden")
        flashCard.innerHTML = ""
        flashCardAnswer.innerHTML = ""
        if(e.target === haribo) {
                let fact = hariboFacts[Math.floor(Math.random()*hariboFacts.length)];
                console.log(fact)
                flashCard.innerHTML = `
                                        <p>${fact.question}</p>
                                        <p class="reveal">Show me the answer please</p>
                                        `
                flashCardAnswer.innerHTML = `
                                        <p>${fact.answer}</p>
                                        `
        }
        if(e.target === film) {
                let fact = tvFilmFacts[Math.floor(Math.random()*tvFilmFacts.length)];
                console.log(fact)
                flashCard.innerHTML = `
                                        <p>${fact.question}</p>
                                        <p class="reveal">Show me the answer please</p>
                                        `
                flashCardAnswer.innerHTML = `
                                        <p>${fact.answer}</p>
                                        `
        }
        if(e.target === music) {
                let fact = eightNineMusic[Math.floor(Math.random()*eightNineMusic.length)];
                console.log(fact)
                flashCard.innerHTML = `
                                        <p>${fact.question}</p>
                                        <p class="reveal">Show me the answer please</p>
                                        `
                flashCardAnswer.innerHTML = `
                                        <p>${fact.answer}</p>
                                        `
        }
        if(e.target === goats) {
                let fact = goatFacts[Math.floor(Math.random()*goatFacts.length)];
                console.log(fact)
                flashCard.innerHTML = `
                                        <p>${fact.question}</p>
                                        <p class="reveal">Show me the answer please</p>
                                        `
                flashCardAnswer.innerHTML = `
                                        <p>${fact.answer}</p>
                                        `
        }
})


document.getElementById("clear-btn").addEventListener('click', function() {
    localStorage.clear()
    welcomeText.textContent = ""
    location.href = "index.html";
 })








