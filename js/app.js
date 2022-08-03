
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
// //   //NPC CONSTRUCTOR

// //   function Boss(attack, defense, specialAttack, imageURL) {
// //     this.attack = attack;
// //     this.defense = defense;
// //     this.specialAttack = specialAttack;
// //     this.healthPoints = 100;
// //     this.image = imageURL;
// //   }


// //   //HELPER FUNCTION TO INSTANTIATE BOSSES AND PUT THEM IN AN ARRAY RANDOMIZER WILL ENSURE THAT BOSS STATS CHANGE EVERY GAME INSTANCE
// //   //BOSS DIFFICULTY COULD BE CONTROLLED BY MODIFYING HOW BOSSES ARE CALLED WITH A LOOP TO CHANGE THE RANDOMIZER

// //   function makeBoss(attack= randomStat(), defense = randomStat(), specialAttack = randomStat(), imageURL = "images/angry-man.jpg") {

// //     newBoss = new Boss(attack, defend, specialAttack, imageURL);
// //     console.log(newBoss);
// //     bossArr.push(newBoss);
// //     return bossArr;

// //   }

// //   console.log(makeBoss());


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


}


  function startFight() {
    newPlayer.healthPoints = 100;
    newPlayer.losses++;
    console.log(newPlayer);
    //getElementById("fight").innerHTML = "Fight Again";
    storePlayer(); 
    
  }

  function storePlayer() {
    console.log(newPlayer);
    let stringifiedPlayer = JSON.stringify(newPlayer);
    console.log(stringifiedPlayer);
    localStorage.setItem('storedPlayer', stringifiedPlayer);
  }

  document.getElementById("fight").addEventListener("click", startFight);





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


//   //WHAT DOES THIS RENDER?

//   //   function Render() {

//   //     let getHeader = document.querySelector(".header");
//   //     let getLeftside = document.querySelector(".leftSide");
//   //     let getBody = document.querySelector('.body');
//   //     let getFooter = document.querySelector('.footer');
//   //     let getMain = document.querySelector('.main')
//   //     getHeader.innerHTML = '<div class="headerInner"><p id="test">HP: Enemy</p>' + '<img src="https://via.placeholder.com/300x375/ddd"></div>';
//   //     getLeftside.innerHTML = '<p>HP: User</p>' + '<img src="https://via.placeholder.com/300x375/ddd">';
//   //     getBody.innerHTML = '<button type="button">Ablilty1</button>' + '<button type="button">Ablilty2</button>' + '<button type="button">Ablilty3</button>' + '<button type="button">Ablilty4</button>'
//   //     getFooter.innerHTML = '<p>Good luck</p>'
//   //     getMain.innerHTML = '<p class="test3">Test2</p>'


//   //   }

//   // }

