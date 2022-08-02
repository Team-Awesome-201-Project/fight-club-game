let player;
let boss;

function Player(playerType,attack,defense,specialAttack,highestLevelCompleted,currentLevel,totalWins,totalLosses,image) 
{
  this.playerType = playerType;
  this.attack = attack;
  this.defense = defense;
  this.specialAttack = specialAttack;
  this.healthPoints = healthPoints;
  this.highestLevelCompleted = highestLevelCompleted;
  this.currentLevel = currentLevel;
  this.totalWins = totalWins;
  this.totalLosses = totalLosses;
  this.image = image;
}

function Boss(){
  this.attack = attack;
  this.defense = defense;
  this.specialAttack = specialAttack;
  this.healthPoints = healthPoints;
  this.image = image
}

let GameManger = {
  setGameStart: function(playerType) {
this.resetPlayer(playerType);
this.setPreFight();
  },
  resetPlayer: function(PlayerType) {
      switch (PlayerType) {
          case "Player1":
              player = new Player(playerType, 100, 100, 100, 0, 0, 0, 0, placeholder);
              break;
          case "Player2":
              player = new Player(playerType, 100, 100, 100, 0, 0, 0, 0, placeholder);
              break;
          case "Player3":
                player = new Player(playerType, 100, 100, 100, 0, 0, 0, 0, placeholder);
                break;
          case "Player4":
                  player = new Player(playerType, 100, 100, 100, 0, 0, 0, 0, placeholder);
                  break;
              // playerType,attack,defense,specialAttack,highestLevelCompleted,currentLevel,totalWins,totalLosses,image
      }

  },
  setPreFight: function() {
      let getHeader = document.querySelector(".header");
      let getActions = document.querySelector(".actions");
      let getArena = document.querySelector(".arena");
      getHeader.innerHTML = '<p>Task:Looking for a fight</p>'
      getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManger.setFight()">Search for an enemy!</a>';
      getArena.style.visibility = "visible";
  }, 
  setFight: function() {
      let getHeader = document.querySelector(".header");
      let getActions = document.querySelector(".actions");
      let getDefense = document.querySelector(".defense")
      let getSpecialMove = document.querySelector('.specialMove');
      let getEnemy = document.querySelector(".enemy");
      // Create enemey!
      // Attack
      // Defense
      // Special Attack
      // Health Points
      // Image
      let boss1 = new Boss("boss1", 100, 100, 100, 100, placeholder);
      let boss2 = new Boss("boss2", 100, 100, 100, 100, placeholder);
      let boss3 = new Boss("boss3", 100, 100, 100, 100, placeholder);
      let boss4 = new Boss("boss4", 100, 100, 100, 100, placeholder);




      switch (stageBossChoice) {
          case 0:
          boss = boss1;
          break;
          case 1:
          boss = boss2;
          break;
          case 2:
          boss = boss3;
          break;
          case 3:
          boss = boss4;
          break;
      }
      getHeader.innerHTML = '<p>Task: Choose your move</p>';
      getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
      getDefense.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcDefense()">Defense!</a>';
      getSpecialMove.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcSpecialMove()">Special Move!</a>';
      // getEnemy.innerHTML = '<img src="images/boss/' + boss.bossType.toLowerCase() + '.jpeg"' + '"class=img-avatar"><div><h3>' + '</h3><p>Health: ' + boss.health + '</p>'
    }
  }