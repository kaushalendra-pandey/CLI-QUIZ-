const readLineSync = require("readline-sync")

const questionsLevel1 = [
    {
        Question : "What is my age?",
        Answer: "21"
    },
    {
        Question : "Where do I Live",
        Answer: "Delhi"
    },
    {
        Question : "Who is my favourite actor?",
        Answer: "Shahrukh Khan"
    },
    
]

const questionsLevel2 = [
    {
        Question : "Web-series or Anime",
        Answer: "web-series"
    },
    {
        Question : "Breaking Bad or Money Heist",
        Answer: "Breaking Bad"
    },
    {
        Question : "Which outdoor sports I like the most",
        Answer: "Cricket"
    }
]

const greet = () => {
    let name = readLineSync.question("HEY!, What is your name?  ")
    console.log(`Hey! ${name}. So glad you are here...Are you ready for a quiz on me?`)

    let response = readLineSync.question("Press Y for YES and N for definitely yes!   ")


    showQuestions()
}

const displaySingleQuestion = (questions,scoreToAdd) => {
    let score = 0
    questions.map((quest) => {
        let ans = readLineSync.question(`${quest.Question}   `)
        if(ans.toLowerCase() === quest.Answer.toLowerCase()) {
            console.log("Whoa!")
            score += scoreToAdd
        }else{
            console.log("Nope!")
        }
    })

    return score
}

const showQuestions = () => {
    console.log("Welcome to Level-1 of the quiz. Each correct answer adds 1 to your score.")

    // score of the player!
    let score = 0

    // display level-1 questions:
    score += displaySingleQuestion(questionsLevel1,1)

    // message before entering level-2
    console.log("Welcome to Level-2 of the quiz. Each correct answer adds 2 to your score.")

    // display level-2 questions:

    score += displaySingleQuestion(questionsLevel2,2)    

    showScore(score)
}

const showScore = (score) => {
    console.log(`You score : ${score}`)
    if(score == 0){
        console.log("Follow me to know me More 😋")
    } else if(score === questionsLevel1.length + questionsLevel2.length){
        console.log("Do you know my Passwords as well? 😯")
    }
}


greet()