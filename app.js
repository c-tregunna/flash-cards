
const welcomeText = document.getElementById("welcome-message")
const modal = document.querySelector(".modal")
const flashCard = document.getElementById("flash-card")
const flashCardAnswer = document.getElementById("flash-card-answer")
const subjects = document.querySelector(".subject-list")
const haribo = document.getElementById("haribo")
const film = document.getElementById("film")
const music = document.getElementById("music")
const goats = document.getElementById("goats")
const revelAnswer = document.getElementById("reveal") 


let nameUser = localStorage.getItem("user-name")
let subject = localStorage.getItem("subject-dropdown")

welcomeText.innerHTML = `
        <p>Hello ${nameUser}. Do you really want to test your knowledge on ${subject}?</p> 
        <p>Na, didn't think so. Instead, why not pick from these far more interesting subjects.</p> <p>Have fun!!</p>
        `


        // Thank to chatgpt for helping me refactor to this code
subjects.addEventListener('click', (e) => {
        // Hide welcome text and show flash card
        welcomeText.classList.add("hidden");
        flashCard.classList.remove("hidden");
        flashCard.innerHTML = "";
        flashCardAnswer.innerHTML = "";
            
        // Define the data sources for each category
        const categories = {
                haribo: hariboFacts,
                film: tvFilmFacts,
                music: eightNineMusic,
                goats: goatFacts
        };
            
        // Function to handle displaying the question and setting up answer reveal
        function displayFact(facts) {
                let fact = facts[Math.floor(Math.random() * facts.length)];
                console.log(fact);
            
                // Hide answer section and show question
                flashCardAnswer.classList.add("hidden");
                flashCard.innerHTML = `
                        <p>${fact.question}</p>
                        <button id="reveal">Show me the answer please</button>
                    `;
            
                // Set up event listener for answer reveal
                document.getElementById("reveal").addEventListener('click', function() {
                flashCard.classList.add("hidden");
                flashCardAnswer.classList.remove("hidden");
                flashCardAnswer.innerHTML = `<p>${fact.answer}</p>`;
                });
        }
            
        // Determine which category was clicked and display the fact
        if (categories[e.target.id]) {
                displayFact(categories[e.target.id]);
        }
});
            

//my original code before refactoring
// subjects.addEventListener('click', (e) => {
//         welcomeText.classList.add("hidden")
//         flashCard.classList.remove("hidden")
//         flashCard.innerHTML = ""
//         flashCardAnswer.innerHTML = ""
//         if(e.target === haribo) {
//                 let fact = hariboFacts[Math.floor(Math.random()*hariboFacts.length)];
//                 console.log(fact)
//                 flashCardAnswer.classList.add("hidden")
//                 flashCard.innerHTML = `
//                                         <p>${fact.question}</p>
//                                         <button id="reveal">Show me the answer please</buttton>
//                                         `
//                 const revelAnswer = document.getElementById("reveal")
//                 revelAnswer.addEventListener('click', function() {
//                         flashCard.classList.add("hidden")
//                         flashCardAnswer.classList.remove("hidden")
//                         flashCardAnswer.innerHTML = `
//                                 <p>${fact.answer}</p>
//                                 `
//                 }) 
//         }
//         if(e.target === film) {
//                 let fact = tvFilmFacts[Math.floor(Math.random()*tvFilmFacts.length)];
//                 console.log(fact)
//                 flashCardAnswer.classList.add("hidden")
//                 flashCard.innerHTML = `
//                                         <p>${fact.question}</p>
//                                         <button id="reveal">Show me the answer please</buttton>
//                                         `  
//                 const revelAnswer = document.getElementById("reveal")
//                 revelAnswer.addEventListener('click', function() {
//                         flashCard.classList.add("hidden")
//                         flashCardAnswer.classList.remove("hidden")
//                         flashCardAnswer.innerHTML = `
//                                         <p>${fact.answer}</p>
//                                         `
//                 }) 
                              
//         }
//         if(e.target === music) {
//                 let fact = eightNineMusic[Math.floor(Math.random()*eightNineMusic.length)];
//                 console.log(fact)
//                 flashCardAnswer.classList.add("hidden")
//                 flashCard.innerHTML = `
//                                         <p>${fact.question}</p>
//                                         <button id="reveal">Show me the answer please</buttton>
//                                         `
//                 const revelAnswer = document.getElementById("reveal")
//                 revelAnswer.addEventListener('click', function() {
//                         flashCard.classList.add("hidden")
//                         flashCardAnswer.classList.remove("hidden")
//                         flashCardAnswer.innerHTML = `
//                                         <p>${fact.answer}</p>
//                                         `
//                 }) 
//         }
//         if(e.target === goats) {
//                 let fact = goatFacts[Math.floor(Math.random()*goatFacts.length)];
//                 console.log(fact)
//                 flashCardAnswer.classList.add("hidden")
//                 flashCard.innerHTML = `
//                                         <p>${fact.question}</p>
//                                         <button id="reveal">Show me the answer please</buttton>
//                                         `
//                 const revelAnswer = document.getElementById("reveal")
//                 revelAnswer.addEventListener('click', function() {
//                         flashCard.classList.add("hidden")
//                         flashCardAnswer.classList.remove("hidden")
//                         flashCardAnswer.innerHTML = `
//                                         <p>${fact.answer}</p>
//                                         `
//                 }) 
//         }
// })


document.getElementById("clear-btn").addEventListener('click', function() {
    localStorage.clear()
    welcomeText.textContent = ""
    location.href = "index.html";
 })








