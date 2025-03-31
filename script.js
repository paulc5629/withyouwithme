/*
  Author: Paul Callaghan
  Date: 2025-03-25
  Description: JavaScript code for a drinking game
*/
let playerid;

class Player {
  constructor(id, life) {
    this.id = id;
    this.life = life;
  }
  removeLife = function(playerid){
    this.playerId = playerid;
    this.life--;
    if (this.life <= 0) {
      console.log(this.name + " has been eliminated");
      this.forfit(playerid);
    }
    console.log(this.playerId + " has " + this.life + " life");
  }

  forfit = function(playerid){
    console.log(this.playerId + " has been forfit");
  }
};


//starting function for the game just to muck around quickly and dirty mmmmmmmmm

function startGame() {
  const playerCount = document.getElementById("player-amount").value;
  if (playerCount<=6 && playerCount>=1){
    for (let i = 0; i < playerCount; i++) {
      playerid = "player"+(i+1)
      playerid = new Player(playerid, 3);
      console.log(playerid.id + " " + playerid.life);
    }
    playerid.removeLife("player1");
  }else {
    alert("Number of players must be between 1 and 6.");
  }
}
