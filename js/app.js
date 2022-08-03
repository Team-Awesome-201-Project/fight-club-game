let player;
let boss;

//USER INPUT FORM
let form = document.getElementById('newUser');

function handleSubmit(event) {
  event.preventDefault();
  newUserName = event.target.name.value;
  avatarChoice = event.target.chooseAvatar.value;
  form.reset();
}

//form.addEventListener('submit', handleSubmit);


//connect move buttons code to the DOM
let moveSection = document.querySelector('#moveSection');
let attack = document.querySelector('#moveSection button:first-child');
let defend = document.querySelector('#moveSection button:nth-child(2)');
let specialMove = document.querySelector('#moveSection button:nth-child(3)');



//FIGHT ACTION SELECTION FUNCTION
function getMoveChoice(event) {
console.log(event.target.id);
  if (event.target.id === 'moveSection') {

      alert('Move or be moved.');
  }
  let moveChoice = event.target.id;
  return moveChoice;
}
moveSection.addEventListener('click', getMoveChoice);