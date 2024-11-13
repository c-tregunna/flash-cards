
const tvFilmFacts = [
    {
        question: "What is the longest-running TV show in U.S. history",
        answer: "Meet the Press, an NBC news and political talk show, holds the record as the longest-running TV show in the United States. It first aired in 1947 and has been on the air for over 75 years."
    },
    {
        question: "Which film franchise holds the record for the highest-grossing revenue worldwide?",
        answer: "The Marvel Cinematic Universe (MCU) is the highest-grossing film franchise, with a total revenue of over $28 billion from its interconnected series of superhero films."
    },
    {
        question: "In the 1939 film The Wizard of Oz, what color were Dorothy’s slippers originally in the book?",
        answer: "In L. Frank Baum’s original book The Wonderful Wizard of Oz, Dorothy’s slippers were silver. When MGM adapted the story for the screen, they decided to make the slippers ruby red to highlight the vibrant Technicolor process, which was new and impressive at the time. The ruby slippers became one of the most memorable movie props in film history."
    },
    {
        question: "Which famous director is known for making cameo appearances in 39 of his own films?",
        answer: "Alfred Hitchcock, often called the Master of Suspense, made cameo appearances in 39 of his films. This playful tradition became a signature for Hitchcock, with fans eagerly looking for his brief appearances."
    }
]

const eightNineMusic = [
    {
        question: "What is the best-selling album of all time?",
        answer: "Michael Jackson's Thriller, released in 1982, is the best-selling album of all time, with sales estimated to be over 66 million copies worldwide. The album included hits like Billie Jean, Beat It, and the title track Thriller."
    },
    {
        question: "Which song, from 1992, became one of the best-selling singles by a female artist?",
        answer: "Whitney Houston’s version of I Will Always Love You, originally written and recorded by Dolly Parton, became a global hit after its release in 1992 as part of the The Bodyguard soundtrack. Known for Houston’s powerful vocal delivery, the song stayed at the top of the Billboard Hot 100 for 14 weeks and became one of the best-selling singles by a female artist, with over 20 million copies sold worldwide."
    },
    {
        question: "Which band and album helped bring grunge music into mainstream popularity in the early 1990s?",
        answer: "Nirvana’s album Nevermind, released in 1991, played a key role in bringing grunge music to mainstream audiences. The album’s lead single, Smells Like Teen Spirit, became an anthem of the Generation X era, and its success helped Seattle-based grunge bands, including Pearl Jam and Soundgarden, rise to prominence. Nirvana’s influence reshaped the music industry in the early 90s, with Nevermind selling over 30 million copies worldwide."
    },
    {
        question: "Which song from the 90's became a worldwide hit and helped make girl power a cultural phenomenon",
        answer: "The Spice Girls’ debut single, Wannabe, released in 1996, became an instant global sensation and a defining anthem of the 1990s. The song topped charts in 37 countries and promoted the group’s message of girl power, a theme that resonated with millions of fans worldwide. The Spice Girls became one of the best-selling girl groups of all time, with Wannabe still celebrated as a 90s pop classic."
    }
]

const hariboFacts = [
    {
        question: "What year was Haribo founded?",
        answer: "Haribo Was Founded in 1920: The company was founded by Hans Riegel in Bonn, Germany, and its name, 'Haribo,' is a blend of the founder’s name and city—Hans Riegel Bonn."
    },
    {
        question: "How many Gummy Bears do Haribo produce a day?",
        answer: "Haribo produces nearly 100 million gummy bears every day! The production process involves molding gelatin-based mixtures in trays filled with cornstarch to create detailed shapes, followed by drying, coating, and packaging."
    },
    {
        question: "What Sweets are usually in the Tangfastic mix in the UK?",
        answer: "Sour Cola Bottles, Crocodiles, Dummies, Cherries, Fizzy Worms."
    },
    {
        question: "What flavours and colours do the Haribo Gummy Bears come in the the UK?",
        answer: "Lemon (yellow), Orange (orange), Raspberry (red), Strawberry (green), and Pineapple (colorless/white)."
    }
]

const goatFacts = [
    {
        question: "How many different breeds of goats are there worldwide?",
        answer: "There are over 300 breeds of goats around the world, adapted to different climates and purposes. Some popular breeds include the Alpine, known for high milk production; the Boer, a large meat-producing breed; and the Nigerian Dwarf, a small breed often kept as pets. Each breed has its own unique characteristics suited to specific environments and uses."
    },
    {
        question: "Which type of goat is known for its exceptional climbing abilities and lives in North America?",
        answer: "The mountain goat, found in the mountainous regions of North America, is famous for its climbing skills. With specially adapted hooves that provide grip on rugged, rocky surfaces, they can ascend steep cliffs and nearly vertical slopes to escape predators and reach food sources, showcasing incredible balance and agility."
    },
    {
        question: "Why do goats have rectangular pupils?",
        answer: "Goats have unique rectangular pupils, which allow them a wide field of vision—up to 320 degrees—helping them detect predators from almost any direction without moving their heads. This pupil shape also helps them see well in dim light, making them well-suited to varied environments."
    },
    {
        question: "What is the smallest breed of goat, and how much do they typically weigh?",
        answer: "The smallest breed of goat is the Pygmy goat. Originally from West Africa, these goats are often kept as pets and for milk. Adult Pygmy goats usually weigh between 35 and 60 pounds, and their friendly, social nature makes them a popular choice among small farm owners and goat enthusiasts."
    }
]




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