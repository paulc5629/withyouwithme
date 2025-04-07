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

  startGame(render){
    /*
    This was added but no longer required to new specification
    const playerCount = document.getElementById("player-amount").value;
      if (playerCount<=6 && playerCount>=1){
        for (let i = 0; i < playerCount; i++) {
          window["player"+(i+1)] = new Player("player"+(i+1), 3);
          //https://www.codecademy.com/forum_questions/51068e93f73ad4947a005629 help for creating the player objects
        }
        //move to new screen to revel first card
        let render = new Render();
        
        render.playScreen();
        console.log("Game Started");
      }else {
        alert("Number of players must be between 1 and 6.");
      }*/
        let game = new Game();
      document.getElementById("forfit").onclick = game.forfit();
      //render = new Render();
      console.log("Game Started");
  }

  forfit(render){
    render = new Render();
    render.forfitScreen();
  }

}
