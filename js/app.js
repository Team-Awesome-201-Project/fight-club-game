
//USER INPUT FORM
let form = document.getElementById('newUser');

function handleSubmit(event) {
  event.preventDefault();
  let newUserName = event.target.newUser.value;
  let avatarChoice = event.target.chooseAvatar.value;
  form.reset();
  console.log(`This is the new character ${newUserName}, and his image address is ${avatarChoice}`);
  newPlayer = new Player(newUserName, avatarChoice, randomStat(), randomStat(), randomStat());
  console.log(newPlayer);
}
// //form is working

// //DECLARE GLOBAL VARIABLES

let newPlayer = {};
let boss = {};
let bossArr = [];
playerInStorage = false;

 //USER CONSTRUCTOR

function Player(playerName, avatarChoice, attack, defense, specialAttack, highestLevelCompleted = 0, currentLevel = 0, totalWins = 0, totalLosses = 0) {
  this.playerName = playerName;
  this.avatar = avatarChoice;
  this.attack = attack;
  this.defense = defense;
  this.specialAttack = specialAttack;
  this.healthPoints = 100;
  this.highestLevelCompleted = highestLevelCompleted;
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
      playerName = player.playerName;
      avatarChoice = player.avatar;
      attack = player.attack;
      defense = player.defense;
      specialAttack = player.specialAttack;
      healthPoints = player.healthPoints;
      highestLevelCompleted = player.highestLevelCompleted;
      currentLevel = player.currentLevel;
      totalWins = player.totalWins;
      totalLosses = player.totalLosses;
      
    
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

  function Boss(attack, defense, specialAttack, imageURL) {
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.healthPoints = 100;
    this.image = imageURL;
  }


  //HELPER FUNCTION TO INSTANTIATE BOSSES AND PUT THEM IN AN ARRAY RANDOMIZER WILL ENSURE THAT BOSS STATS CHANGE EVERY GAME INSTANCE
  //BOSS DIFFICULTY COULD BE CONTROLLED BY MODIFYING HOW BOSSES ARE CALLED WITH A LOOP TO CHANGE THE RANDOMIZER

  function makeBoss(attack= randomStat(), defense = randomStat(), specialAttack = randomStat(), imageURL = "images/angry-man.jpg") {

    newBoss = new Boss(attack, defend, specialAttack, imageURL);
    console.log(newBoss);
    bossArr.push(newBoss);
    return bossArr;


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




  }


  //  console.log(makeBoss());
  //  console.log(makeBoss());
  //  console.log(makeBoss());
  //  console.log(makeBoss());


  //RANDOMIZER FOR PLAYER AND BOSS STATS - CAN WE USE THE SAME ONE FOR GAMEPLAY?

  function randomStat() {

    return Math.floor(Math.random() * 11);
    //THIS RETURNS A VALUE BETWEEN 0 and 10, DO WE WANT A MIN?
  }

  //START FIGHT BUTTON - USED BOTH FOR FIRST FIGHT AND RESTART FIGHT 
  //BUTTON WORKS - NEED TO TEST STORAGE

function handleClick(e){
  e.preventDefault();
  startFight();
  
 
  
//.inner = "Fight Again";
}


  function startFight() {
    newPlayer.healthPoints = 100;
    newPlayer.losses++;
    document.getElementById("fight").innerHTML="Fight Again";
    console.log(newPlayer);
    
    storePlayer(); 
    
  }

  function storePlayer() {
    console.log(newPlayer);
    let stringifiedPlayer = JSON.stringify(newPlayer);
    console.log(stringifiedPlayer);
    localStorage.setItem('storedPlayer', stringifiedPlayer);
  }

document.getElementById("fight").addEventListener("click", handleClick);





//   //connect move buttons code to the DOM
//   let moveSection = document.querySelector('#moveSection');
//   let attack = document.querySelector('#moveSection button:first-child');
//   let defend = document.querySelector('#moveSection button:nth-child(2)');
//   let specialAttack = document.querySelector('#moveSection button:nth-child(3)');

  
  
//   //FIGHT ACTION SELECTION FUNCTION
//   function getMoveChoice(event) {
//     if (event.target.id === '#moveSection') {
//       alert('Move or be moved.');
//     }
//     let moveChoice = event.target.id;
//     console.log(event.target.id);
//     console.log(moveChoice);
//     return moveChoice;
//   }
//   moveSection.addEventListener('click', getMoveChoice);


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
