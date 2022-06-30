let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let newGame = document.getElementById("new-game")

// HOME SCORE 

let homeWholeScore = 0

function add1() {
    homeWholeScore += 1
    homeScore.textContent = homeWholeScore
}

function add2() {
    homeWholeScore += 2
    homeScore.textContent = homeWholeScore
}

function add3() {
    homeWholeScore += 3
    homeScore.textContent = homeWholeScore
}

// GUEST SCORE 

let guestWholeScore = 0

function addone() {
    guestWholeScore += 1
    guestScore.textContent = guestWholeScore
}

function addtwo() {
    guestWholeScore += 2
    guestScore.textContent = guestWholeScore
}

function addthree() {
    guestWholeScore += 3
    guestScore.textContent = guestWholeScore
}

// NEW GAME 

let resetGame = 0

function newgame() {
    homeScore.textContent = 0
    homeWholeScore = 0
    guestScore.textContent = 0
    guestWholeScore = 0
}