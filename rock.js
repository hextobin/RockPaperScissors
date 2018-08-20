var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var win_label = document.getElementById('win-count')
var loss_label = document.getElementById('loss-count')
var tie_label = document.getElementById('tie-count')
var choices = ['rock', 'paper', 'scissors']
var computer_choice = 0
var player_attempts = 0
var player_wins = 0
var player_ties = 0



rock.addEventListener('click', function() {
  player_attempts += 1
  computer_choice =  choices[Math.floor(Math.random() * 3)]
  alert('The computer chose ' + computer_choice)
  switch (computer_choice) {
    case 'rock':
      alert('You tied!')
      player_ties += 1
      break
    case 'paper':
      alert('You lose!')
      break
    case 'scissors':
      player_wins += 1
      alert('You win!')
      break
    default:
      alert('Error 1!!!')
  }
  win_label.innerHTML = 'Wins = ' + player_wins
  loss_label.innerHTML = 'Losses = ' + (player_attempts - player_wins - player_ties)
  tie_label.innerHTML = 'Ties = ' + (player_ties)


})

paper.addEventListener('click', function() {
  player_attempts += 1
  computer_choice =  choices[Math.floor(Math.random() * 3)]
  alert('The computer chose ' + computer_choice)
  switch (computer_choice) {
    case 'rock':
      player_wins += 1
      alert('You win!')
      break
    case 'paper':
      player_ties += 1
      alert('You tied!')
      break
    case 'scissors':
      alert('You lose!')
      break
    default:
      alert('Error 1!!!')
  }
  win_label.innerHTML = 'Wins = ' + player_wins
  loss_label.innerHTML = 'Losses = ' + (player_attempts - player_wins - player_ties)
  tie_label.innerHTML = 'Ties = ' + (player_ties)


})

scissors.addEventListener('click', function() {
  player_attempts += 1
  computer_choice =  choices[Math.floor(Math.random() * 3)]
  alert('The computer chose ' + computer_choice)
  switch (computer_choice) {
    case 'rock':
      alert('You lose!')
      break
    case 'paper':
      player_wins += 1
      alert('You win!')
      break
    case 'scissors':
      player_ties += 1
      alert('You tie!')
      break
    default:
      alert('Error 1!!!')
  }
  win_label.innerHTML = 'Wins = ' + player_wins
  loss_label.innerHTML = 'Losses = ' + (player_attempts - player_wins - player_ties)
  tie_label.innerHTML = 'Ties = ' + (player_ties)


})

win_label.innerHTML = 'Wins = ' + player_wins
loss_label.innerHTML = 'Losses = ' + (player_attempts - player_wins - player_ties)
tie_label.innerHTML = 'Ties = ' + (player_ties)
