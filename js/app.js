//DECLARE GLOBAL VARIABLES

let player;
// let chr1 = document.getElementById('avatar1')
// let chr2 = document.getElementById('avatar2')
// let chr3 = document.getElementById('avatar3')
// let chr4 = document.getElementById('avatar4')
let boss;
let bossArr = [];




function Render() {

  let gamePlayScreen = document.querySelector(".gamePlayScreen");
  gamePlayScreen.innerHTML = 'Section<div class="headerInner"><p id="test">HP: Enemy</p>' + '<img src="https://via.placeholder.com/300x375/ddd"></div></section><section><div class="headerInner"><p id="test">HP: Player</p>' + '<img src="https://thumbs.dreamstime.com/z/tough-man-18388218.jpg""></div></section>';


}









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

