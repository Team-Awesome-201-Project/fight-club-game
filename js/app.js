
//USER INPUT FORM
let form = document.getElementById('newUser');

function handleSubmit(event) {
  event.preventDefault();
  let newUserName = event.target.newUserName.value;
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


// // //USER INPUT FORM
// let form = document.getElementById('newUser');
// function handleSubmit(event) {
  
//   event.preventDefault();
//   let newUser = event.target.newUser.value;
//   let avatarChoice = event.target.chooseAvatar.value;
//   form.reset();
//   console.log(avatarChoice);
//   return;
// }

form.addEventListener('submit', handleSubmit);





//DECLARE GLOBAL VARIABLES

