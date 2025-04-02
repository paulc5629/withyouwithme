/*
  Author: Paul Callaghan
  Date: 2025-03-25
  Description: JavaScript code for a drinking game
*/


export class Player {

  constructor(id, life) {
    this.id = id;
    this.life = life;
  }

  displayPlayer = function(id){
    console.log(this.id + " has " + this.life + " life");
  }

  removeLife = function(id){
    this.life--;
    if (this.life <= 0) {
      console.log(this.name + " has been eliminated");
      this.forfit(playerid);
    }
    console.log(this.id + " has lost a life");
  }

  forfit = function(playerid){
    console.log(this.playerId + " has been forfit");
  }
};

//export let player = new Player();