let player;
let boss;

// ========== Player constructor and prototypes ==========

function Player(userName, attack, defense, specialAttack, highestLevelCompleted, currentLevel, totalWins, totalLosses, fileExtension = 'jpg') {
  this.userName = userName;
  this.attack = attack;
  this.defense = defense;
  this.specialAttack = specialAttack;
  this.healthPoints = healthPoints;
  this.highestLevelCompleted = highestLevelCompleted;
  this.currentLevel = currentLevel;
  this.totalWins = totalWins;
  this.totalLosses = totalLosses;
  this.src = `images/${this.playerType}.${fileExtension}`;
}

Player.prototype.newHealth = function (bossIncDmg) {
  console.log(this.bHealthPoints);
  this.bHealthPoints -= bossIncDmg;
  console.log(this.bHealthPoints);
}

Player.prototype.attackStart = function (min, max) {
  console.log('player chose to attck!');
  min = Math.ceil(min);
  max = Math.ceil(max);
  let crit = criticalStart();
  console.log(criticalStart());
  if (crit === false) {
      return playerIncDmg += Math.floor(Math.random() * (max - min + 1) + min);
  }
  else if (crit === true) {
      return playerIncDmg += Math.floor(Math.random() * (max - min + 1) + min) * 2;
  }
}

Player.prototype.specialAttackStart = function (min, max) {
  console.log('boss chose to attck!');
  min = Math.ceil(min);
  max = Math.ceil(max);
  let crit = criticalStart();
  if (crit === false) {
      return bossIncDmg += Math.floor(Math.random() * (max - min + 1) + min);
  }
  else if (crit === true) {
      return bossIncDmg += Math.floor(Math.random() * (max - min + 1) + min) * 2;
  }
}

Player.prototype.defendStart = function (){
  return playerDefense = true;
}

// ========== Boss constructor and prototypes ==========

function Boss(bossType, bAttack, bDefense, bSpecialAttack, bHealthPoints, fileExtension = 'jpg') {
  this.bossType = bossType;
  this.bAttack = bAttack;
  this.bDefense = bDefense;
  this.bSpecialAttack = bSpecialAttack;
  this.bHealthPoints = bHealthPoints;
  this.bSrc = `images/${this.bossType}.${fileExtension}`;



}

Boss.prototype.newHealth = function (playerIncDmg) {
  console.log(this.bHealthPoints);
  this.bHealthPoints -= playerIncDmg;
  console.log(this.bHealthPoints);
}

Boss.prototype.attackStart = function (min, max) {
  console.log('boss chose to attck!');
  min = Math.ceil(min);
  max = Math.ceil(max);
  let crit = criticalStart();
  if (crit === false) {
      return bossIncDmg += Math.floor(Math.random() * (max - min + 1) + min);
  }
  else if (crit === true) {
      return bossIncDmg += Math.floor(Math.random() * (max - min + 1) + min) * 2;
  }
}

Boss.prototype.specialAttackStart = function (min, max) {
  console.log('boss chose to attck!');
  min = Math.ceil(min);
  max = Math.ceil(max);
  let crit = criticalStart();
  if (crit === false) {
      return bossIncDmg += Math.floor(Math.random() * (max - min + 1) + min);
  }
  else if (crit === true) {
      return bossIncDmg += Math.floor(Math.random() * (max - min + 1) + min) * 2;
  }
}

// Boss.prototype.defendStart = function (){
//   return bossDefense = true;
// }

// GameManager, runs

let GameManger = {
  setGameStart: function (playerType) {
    this.resetPlayer(playerType);
    this.setPreFight();
  },
  resetPlayer: function (PlayerType) {
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
  setPreFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task:Looking for a fight</p>'
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManger.setFight()">Search for an enemy!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function () {
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
    let boss1 = new Boss(bossType, 100, 100, 100, 100, placeholder);
    let boss2 = new Boss(bossType, 100, 100, 100, 100, placeholder);
    let boss3 = new Boss(bossType, 100, 100, 100, 100, placeholder);
    let boss4 = new Boss(bossType, 100, 100, 100, 100, placeholder);



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

let boss1 = new Boss('Player', [5, 10], 10, [15, 10], 100, 'test');
let boss2 = new Boss('Boss', [15, 20], 10, [20, 30], 100, 'test');
