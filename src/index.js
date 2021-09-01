import './style.css';
import getData from './getData.js';
import createGame from './createGame.js';
import addScore from './addScore.js';
import displayScore from './displayScore.js';

const addButton = document.querySelector('.add');
const refreshButton = document.querySelector('.refresh');
const listContainer = document.querySelector('.lists');
const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

window.addEventListener('DOMContentLoaded', async () => {
  const data = await createGame();
  let gameId = data.result;
  gameId = gameId.substring(14, 34);

  addButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const userName = document.querySelector('#user_name');
    const userScore = document.querySelector('#user_score');
    if(userName.value === '' || userScore.value === '') {
      return;
    } else {
      await addScore(userName.value, userScore.value, `${api}${gameId}/scores/`);
      userName.value = '';
      userScore.value = '';
    }
    
  });

  refreshButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const endResult = await getData(`${api}${gameId}/scores`);
    await displayScore(listContainer, endResult.result);
  });
});