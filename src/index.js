import './style.css';
import getData from './getData.js';
import createGame from './createGame.js'

window.addEventListener('DOMContentLoaded', async () => {
  const data = await createGame()
  let gameId = data.result
  gameId = gameId.substring(14, 34)

})