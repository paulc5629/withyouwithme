/*author:Paul Callaghan
  date: 2025-03-25
  description: Game script for a drinking game
*/

import {Player} from './player.js';
import {Render} from './render.js';

window.onload = function() {
  //create new game object and set start game button to trigger start function
  const game = new Game();
  document.getElementById("start-game").onclick = game.startGame;
} 

class Game{
  startGame = function(render) {
    
    const playerCount = document.getElementById("player-amount").value;
      if (playerCount<=6 && playerCount>=1){
        for (let i = 0; i < playerCount; i++) {
          window["player"+(i+1)] = new Player("player"+(i+1), 3);
          //https://www.codecademy.com/forum_questions/51068e93f73ad4947a005629 help for creating the player objects
        }
      }else {
        alert("Number of players must be between 1 and 6.");
      }
    //move to new screen to revel first card
    render = new Render();
    render.playScreen();
    console.log("Game Started");
  }
}
