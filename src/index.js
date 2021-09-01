import './style.css';
import getData from './getData.js';
import createGame from './createGame.js'
import addScore from './addScore';

window.addEventListener('DOMContentLoaded', async () => {
  const data = await createGame()
  let gameId = data.result
  gameId = gameId.substring(14, 34)

  const addButton = document.querySelector('.add');
  const refreshButton = document.querySelector('.refresh')
  const userName = document.querySelector('#user_name')
  const userScore = document.querySelector('#user_score');
  const listContainer = document.querySelector('.lists')
  const Url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'

  addButton.addEventListener('click', async (e) => {
    e.preventDefault();
    await addScore(userName.value, userScore.value, `${url}${gameId}/scores/`);
    userName = '';
    userScore = '';
  })
})