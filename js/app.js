//USER INPUT FORM
let form = document.getElementById('newUser');
// console.log(newPlayer.avatar);


function handleSubmit(event) {
  event.preventDefault();
  let newUserName = event.target.newUserName.value;
  let avatarChoice = event.target.chooseAvatar.value;
  form.reset();
  console.log(`This is the new character ${newUserName}, and his image address is ${avatarChoice}`);
  newPlayer = new Player(newUserName, avatarChoice, randomStat(), randomStat(), 
  randomStat());
  form.setAttribute("class", "dont-use");
  console.log(newPlayer);
}
// //form is working

// //DECLARE GLOBAL VARIABLES
let stringifiedPlayer = '';
let newPlayer = {};
let boss = {};
let bossArr = [];
playerInStorage = false;
let i = 0;
let playerCh = document.getElementById("playerImage");
let bossCh = document.getElementById("bossImage");
//USER CONSTRUCTOR

function Player(playerName, avatarChoice, attack, defense, specialAttack, healthPoints = 100, highestLevelCompleted = 0, currentLevel = 0, totalWins = 0, totalLosses = 0) {
  this.playerName = playerName;
  this.avatar = avatarChoice;
  this.attack = [5, 15];
  this.defense = defense;
  this.specialAttack = [20, 30];
  this.highestLevelCompleted = highestLevelCompleted;
  this.healthPoints = healthPoints
  this.currentLevel = currentLevel;
  this.totalWins = totalWins;
  this.totalLosses = totalLosses;


}


//HELPER CONSTRUCTOR - TAKES IN LOCAL STORAGE FIRST

function buildPlayer() {
  //check to see if there are players in memory

  let savedPlayer = localStorage.getItem('storedPlayer');

  if (savedPlayer) {
    playerInStorage = true;
    console.log('storage is full');
    form.setAttribute("class", "dont-use");
    // turn the potential orders back into Plain old JavaScript objects
    let player = JSON.parse(savedPlayer);

    // turn them back into instances of products
    // run the data back througgh the constructor again - REINSTANTIATE


    // extract values from the POJOs
    let playerName = player.playerName;
    let avatarChoice = player.avatar;
    let attack = player.attack;
    let defense = player.defense;
    let specialAttack = [1, 10];
    let healthPoints = player.healthPoints;
    let highestLevelCompleted = player.highestLevelCompleted;
    let currentLevel = player.currentLevel;
    let totalWins = player.totalWins;
    let totalLosses = player.totalLosses;
    console.log(totalLosses);

    // PASS VALUES FROM POJO TO THE CONSTRUCTOR HELPER
    newPlayer = new Player(playerName, avatarChoice, attack, defense, specialAttack, healthPoints, highestLevelCompleted, currentLevel, totalWins, totalLosses);

  }
  // IF NO PLAYER IN MEMORY TAKE IN FORM INFO AND USE RANDOMIZER TO MAKE PLAYER, DONT NEED TO PASS IN KEYS WITH DEFAULT VALUES
  else {
    form.addEventListener('submit', handleSubmit);

  }
}

buildPlayer();

//NPC CONSTRUCTOR

function Boss(imageURL, attack, defense, specialAttack, healthPoints = 100) {
  this.image = imageURL;
  this.attack = attack;
  this.defense = defense;
  this.specialAttack = specialAttack;
  this.healthPoints = 100;
}


//HELPER FUNCTION TO INSTANTIATE BOSSES AND PUT THEM IN AN ARRAY RANDOMIZER WILL ENSURE THAT BOSS STATS CHANGE EVERY GAME INSTANCE
//BOSS DIFFICULTY COULD BE CONTROLLED BY MODIFYING HOW BOSSES ARE CALLED WITH A LOOP TO CHANGE THE RANDOMIZER

function makeBoss(imageURL, attack = randomStat(), defense = randomStat(), specialAttack = randomStat(), healthPoints) {

  newBoss = new Boss(imageURL, attack, defense, specialAttack, healthPoints);
  console.log(newBoss);
  bossArr.push(newBoss);
  console.log(bossArr);
  return bossArr;

}


makeBoss('images/401.png',[1, 5], randomStat(), [5, 10]);
makeBoss('images/201.jpg',[100, 100], randomStat(), [1000, 1000]);
// makeBoss(,randomStat(), randomStat(), randomStat());



console.log(bossArr);
//RANDOMIZER FOR PLAYER AND BOSS STATS - CAN WE USE THE SAME ONE FOR GAMEPLAY?

function randomStat() {

  return Math.floor(Math.random() * 11);
  //THIS RETURNS A VALUE BETWEEN 0 and 10, DO WE WANT A MIN?
}

Boss.prototype.newHealth = function (playerIncDmg) {
  this.healthPoints -= playerIncDmg;
  if (this.healthPoints <= 0) {
    this.healthPoints = 0;
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

Player.prototype.newHealth = function (bossIncDmg) {
  this.healthPoints -= bossIncDmg;
  if (this.healthPoints <= 0) {
    this.healthPoints = 0;
  }
}
//Issue
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



//START FIGHT BUTTON - USED BOTH FOR FIRST FIGHT AND RESTART FIGHT 
//BUTTON WORKS - NEED TO TEST STORAGE

function handleClick(e) {
  e.preventDefault();
  startFight();



  //.inner = "Fight Again";
}


function startFight() {
  newPlayer.healthPoints = 100;
  // newPlayer.totalLosses++;
  document.getElementById("fight").innerHTML = "Fight Again";
  console.log(newPlayer);
  moveSection.setAttribute("class","use");

  storePlayer();
  renderCharacters();
  gamePlayScreen.setAttribute("class","use");
}


function storePlayer() {
  console.log(newPlayer);
  stringifiedPlayer = JSON.stringify(newPlayer);
  console.log(stringifiedPlayer);
  localStorage.setItem('storedPlayer', stringifiedPlayer);
}

document.getElementById("fight").addEventListener("click", handleClick);





//connect move buttons code to the DOM
let moveSection = document.querySelector('#moveSection');
let attack = document.querySelector('#moveSection button:first-child');
let defend = document.querySelector('#moveSection button:nth-child(2)');
let specialAttack = document.querySelector('#moveSection button:nth-child(3)');



//FIGHT ACTION SELECTION FUNCTION
function getMoveChoice(event) {
  if (event.target.id === '#moveSection') {
    alert('Move or be moved.');
  }
  let moveChoice = event.target.id;
  console.log(event.target.id);
  console.log(moveChoice);
  gameLogic(moveChoice);

}
moveSection.addEventListener('click', getMoveChoice);


//RENDERS GAMEPLAY AREA 

function renderCharacters() {
  
  playerCh.innerHTML = `<img src="${newPlayer.avatar}"></img>`;
  bossCh.innerHTML = `<img src="${newBoss.image}"></img>`
  console.log(newBoss.image);
}


// let playerCh = document.getElementById("playerImage");
// let bossCh = document.getElementById("bossImage");


function renderLeaderBoard() {
  let leaderBoard = document.querySelector("#leaderBoard");
  leaderBoard.innerHTML = `<ul><li>${newPlayer.playerName} total wins: ${newPlayer.totalWins}</li><li>${newPlayer.playerName} Total loses:${newPlayer.totalLosses}</li></ul>`
}

// renderLeaderBoard();
console.log(newPlayer);


function hideLeaderBoard(event) {


  let x = document.getElementById("leaderBoard");
  renderLeaderBoard();
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}






document.getElementById("seeStats").addEventListener("click", hideLeaderBoard)
