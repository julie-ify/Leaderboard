import './style.css';
import getData from './getData.js';
import createGame from './createGame.js'

window.addEventListener('DOMContentLoaded', async () => {
  const {result} = await createGame()
})