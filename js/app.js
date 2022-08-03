
//DECLARE GLOBAL VARIABLES

let player;
// let chr1 = document.getElementById('avatar1')
// let chr2 = document.getElementById('avatar2')
// let chr3 = document.getElementById('avatar3')
// let chr4 = document.getElementById('avatar4')
let boss;
let bossArr = [];




function Render() {

  let gamePlayScreen = document.querySelector(".gamePlayScreen")
  gamePlayScreen.innerHTML = 'Section<div class="headerInner"><p id="test">HP: Enemy</p>' + '<img src="https://via.placeholder.com/300x375/ddd"></div></section><section><div class="headerInner"><p id="test">HP: Player</p>' + '<img src="https://thumbs.dreamstime.com/z/tough-man-18388218.jpg""></div></section><button type="button" onclick="gameLogic()">Attack</button>' + '<button type="button">Defense</button>' + '<button type="button">S Attack</button>';


}









function Player(playerName, avatarChoice, attack, defense, specialAttack, highestLevelCompleted = 0, currentLevel = 0, totalWins = 0, totalLosses = 0) {
  this.playerName = playerName;
  this.avatar = avatarChoice;


 fightSequence
// ========== Player constructor and prototypes ==========

function Player(userName, attack, defense, specialAttack, healthPoints, highestLevelCompleted, currentLevel, totalWins, totalLosses, fileExtension = 'jpg') {
  this.userName = userName;

  this.attack = attack;
  this.defense = defense;
  this.specialAttack = specialAttack;
  this.healthPoints = 100;
  this.highestLevelCompleted = highestLevelCompleted;
  this.currentLevel = currentLevel;
  this.totalWins = totalWins;
  this.totalLosses = totalLosses;
 
}



// //USER INPUT FORM
let form = document.getElementById('newUser');
function handleSubmit(event) {
  
  event.preventDefault();
  let newUser = event.target.newUser.value;
  let avatarChoice = event.target.chooseAvatar.value;
  form.reset();
  console.log(avatarChoice);
  return;
}

form.addEventListener('submit', handleSubmit);





//DECLARE GLOBAL VARIABLES


Player.prototype.newHealth = function (bossIncDmg) {
  this.healthPoints -= bossIncDmg;
  if (this.healthPoints <= 0) {
    this.healthPoints = 0;
  }
}

Player.prototype.attackStart = function (min, max) {
  console.log('player chose to attck!');
  min = Math.ceil(min);
  max = Math.ceil(max);
  let crit = criticalStart();
  if (crit === false) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  else if (crit === true) {
      return Math.floor(Math.random() * (max - min + 1) + min) * 2;
  }
  console.log()
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

Player.prototype.defendStart = function () {
  return playerDefense = true;
}

Player.prototype.addStats = function () {

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
  this.bHealthPoints -= playerIncDmg;
  if (this.bHealthPoints <= 0) {
    this.bHealthPoints = 0;
  }
}

Boss.prototype.attackStart = function (min, max) {
  console.log('boss chose to attck!');
  min = Math.ceil(min);
  max = Math.ceil(max);
  let crit = criticalStart();
  if (crit === false) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  else if (crit === true) {
      return Math.floor(Math.random() * (max - min + 1) + min) * 2;
  }
}

Boss.prototype.specialAttackStart = function (min, max) {
  console.log('boss chose to attck!');
  min = Math.ceil(min);
  max = Math.ceil(max);
  let crit = criticalStart();
  if (crit === false) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  else if (crit === true) {
      return Math.floor(Math.random() * (max - min + 1) + min) * 2;
  }
}

let player1 = new Player('Player', [5, 10], 10, [15, 10], 100, 'test');
let boss1 = new Boss('Boss', [15, 20], 10, [20, 30], 100, 'test');

let playerArray = [player1];
let bossArray = [boss1];

console.log(playerArray[0]);
console.log(bossArray[0]);

  function Render() {

    let getHeader = document.querySelector(".header");
    let getLeftside = document.querySelector(".leftSide");
    let getBody = document.querySelector('.body');
    let getFooter = document.querySelector('.footer');
    let getMain = document.querySelector('.main')
    getHeader.innerHTML = '<div class="headerInner"><p id="test">HP: Enemy</p>' + '<img src="https://via.placeholder.com/300x375/ddd"></div>';
    getLeftside.innerHTML = '<p>HP: User</p>' + '<img src="https://via.placeholder.com/300x375/ddd">';
    getBody.innerHTML = '<button type="button">Ablilty1</button>' + '<button type="button">Ablilty2</button>' + '<button type="button">Ablilty3</button>' + '<button type="button">Ablilty4</button>'
    getFooter.innerHTML = '<p>Good luck</p>'
    getMain.innerHTML = '<p class="test3">Test2</p>'



  }
}
