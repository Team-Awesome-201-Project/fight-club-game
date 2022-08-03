
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

