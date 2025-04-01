/*author:Paul Callaghan
  date: 2025-03-25
  description: Game script for a drinking game
*/
import {Player} from './player.js';
class Game{

  startGame = function() {
    let playerid    
    const playerCount = document.getElementById("player-amount").value;
      if (playerCount<=6 && playerCount>=1){
        for (let i = 0; i < playerCount; i++) {
          playerid = "player"+(i+1);
          playerid = new Player(playerid, 3);
          console.log(playerid);
        }
          playerid.removeLife("player1");
          playerid.displayPlayer("player3");
      }else {
        alert("Number of players must be between 1 and 6.");
      }
     console.log("Game Started");
  }
}


window.onload = function() {
  const game = new Game();
  document.getElementById("start-game").onclick = game.startGame;
} 
//document.getElementById("start-game").onclick = game.startGame();