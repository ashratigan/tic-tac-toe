// ************************
// variables
// ************************
const userOne = '🌛'
const userTwo = '🌞'
let currentUser = userTwo
let winner = ''
let scoreO = 0
let scoreX = 0
let executedScore = false

const gameValues = {
  i: 0,
  v: 0,
  isOver: false
}

// ************************
// Game play
// ************************
const playerMoves = $('.col1, .col2, .col3').click(function (square) {
  if (winner === '' && square.target.innerHTML === '') {
    displayCurrentUser(currentUser)
    // console.log(square.target.innerHTML)
    // console.log(square.target)
    // console.log(square)
    if (currentUser === userOne) {
      $(this).html(userTwo)
      currentUser = userTwo
      gameValues.i = square.target.id
      gameValues.v = userOne
    } else if (currentUser === userTwo) {
      $(this).html(userOne)
      currentUser = userOne
      gameValues.i = square.target.id
      gameValues.v = userTwo
    }
    checkWinner()
    score(winner)
  }
})

// ************************
// function to determine winner
// // ************************
const sq = function (number) {
  return document.getElementById(number).innerText
}

const checkWinner = function () {
  for (let i = 0; i <= 8; i++) {
    const num = i.toString()
    sq(num)
    // for horizantal rows
  } if (sq(0) !== '' && sq(0) === sq(1) && sq(1) === sq(2) ||
        sq(3) !== '' && sq(3) === sq(4) && sq(4) === sq(5) ||
        sq(6) !== '' && sq(6) === sq(7) && sq(7) === sq(8) ||
        sq(0) !== '' && sq(0) === sq(3) && sq(3) === sq(6) ||
        sq(1) !== '' && sq(1) === sq(4) && sq(4) === sq(7) ||
        sq(2) !== '' && sq(2) === sq(5) && sq(5) === sq(8) ||
        sq(0) !== '' && sq(0) === sq(4) && sq(4) === sq(8) ||
        sq(6) !== '' && sq(6) === sq(4) && sq(4) === sq(2)) {
    message(`Congratulations, ${currentUser}! You win!`)
    $('#main').css({'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center', 'height': '100%'})
    gameValues.isOver = true
    if (currentUser === userOne) {
      $('#main').css('background-image', 'url(https://ashratigan.github.io/tic-tac-toe/public/moon.gif)')
      winner = currentUser
    } else if (currentUser === userTwo) {
      $('#main').css('background-image', 'url(https://ashratigan.github.io/tic-tac-toe/public/sun2.gif)')
      winner = currentUser
    }
  } else if (sq(0) !== '' && sq(1) !== '' && sq(2) !== '' && sq(3) !== '' && sq(4) !== '' && sq(5) !== '' && sq(6) !== '' && sq(7) !== '' && sq(8) !== '') {
    message(`You tied!`)
    gameValues.isOver = true
    $('#main').css({'background-size': 'cover', 'background-image': 'url(https://ashratigan.github.io/tic-tac-toe/public/fireworks.gif'})
  }
}

// ************************
// functions to display text
// ************************
const message = function (msg) {
  document.getElementById('message').innerText = msg
}

const displayCurrentUser = function (currentUser) {
  document.getElementById('message').innerText = `${currentUser}, it's your turn!`
}

// ************************
// function to add win to score
// ************************
const score = function (winner) {
  if (!executedScore && winner === userOne) {
    scoreX++
    executedScore = true
  } else if (!executedScore && winner === userTwo) {
    scoreO++
    executedScore = true
  }
  document.getElementById('score').innerText = `${userOne}: ${scoreX} and ${userTwo}: ${scoreO}`
}

// ************************
// function to start game
// ************************
const startGame = function () {
  for (let i = 0; i <= 8; i++) {
    const num = i.toString()
    clearBoard(num)
  }
}

// ************************
// function to reset game
// ************************
const clearBoard = function (number) {
  document.getElementById(number).innerText = ''
  winner = ''
  executedScore = false
  message('')
  $('#main').css('background-image', 'none')
}
document.getElementById('newGame').addEventListener('click', startGame)

// ************************
// function to reset score
// ************************
const resetScore = function () {
  scoreX = 0
  scoreO = 0
  score()
}
document.getElementById('resetScore').addEventListener('click', resetScore)

// ************************
// exports
// ************************
module.exports = {
  playerMoves,
  startGame,
  gameValues
}
