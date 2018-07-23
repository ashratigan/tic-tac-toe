'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#userMessage').text('Signed up successfully')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#userMessage').text('Signed in successfully')
  $('.seeInfo').css('display', 'block')
  $('.signInUp').css('display', 'none')
  $('.sign-inup-buttons').css('display', 'none')
  $('#sign-in')[0].reset()
  // $('#chooseUser').css('display', 'block')
  store.user = data.user
}

const changePasswordSuccess = function (data) {
  $('#changedPassword').text('Password changed successfully')
  $('#changedPassword').delay(3200).fadeOut(300)
  // $('#changedPassword').css('background-color', '#103656')
  $('#change-password').css('display', 'none')
  $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  $('#userMessage').text('Signed out successfully')
  $('.signInUp').css('display', 'block')
  $('#gameboard').css('display', 'none')
  $('.userButtons').css('display', 'none')
  $('.userInfo').css('display', 'none')
  $('.sign-inup-buttons').css('display', 'block')
  $('#chooseUser').css('display', 'none')
  store.user = null
}

const createSuccess = function (data) {
  $('#gameboard').css('display', 'block')
  store.game = data.game
  store.game.id = data.game.id
}

const movesSuccess = function () {
  // console.log('moves')
}

const getGamesSuccess = function (data) {
  for (let i = 0; i < data.games.length; i++) {
    $('#view-games').append('<p><b>ID:</b>' + data.games[i].id + '    <b>Game Squares</b>' + data.games[i].cells + '</p>')
    // console.log(data.games[i])
  }
}

const failure = function () {
  $('#userMessage').text('Error')
  $('#userMessage').css('background-color', '#800')
  // console.log('Failure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  createSuccess,
  movesSuccess,
  getGamesSuccess,
  failure
}
