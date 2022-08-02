
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

