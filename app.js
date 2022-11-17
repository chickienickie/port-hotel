const buttons = document.querySelectorAll('.button');
const menus = document.querySelectorAll('.menu');

const highlight = document.createElement('span');
document.body.appendChild(highlight);
highlight.classList.add('highlight');


function initialHightlightLocation() {
  const activeButton = document.querySelector('.button--is-active');
  const activeButtonCoords = activeButton.getBoundingClientRect();

  const initialCoords = {
    width: activeButtonCoords.width,
    height: activeButtonCoords.height,
    left: activeButtonCoords.left + window.scrollX,
    top: activeButtonCoords.top + window.scrollY
  }

  highlight.style.width = `${initialCoords.width}px`;
  highlight.style.height = `${initialCoords.height}px`;
  highlight.style.transform = `translate(${initialCoords.left}px, ${initialCoords.top}px)`;
}

function handleClick(e) {
  e.preventDefault();

  buttons.forEach(button => button.classList.remove('button--is-active'));
  this.classList.add('button--is-active');


  const buttonCoords = this.getBoundingClientRect();
  const coords = {
    width: buttonCoords.width,
    height: buttonCoords.height,
    left: buttonCoords.left + window.scrollX,
    top: buttonCoords.top + window.scrollY
  }
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;


  const targetMenu = document.querySelector(`#${this.dataset.target}`);
  menus.forEach(menu => {
    menu.classList.remove('menu--is-visible');
    targetMenu.classList.add('menu--is-visible');
  })
}

window.addEventListener('load', initialHightlightLocation);
window.addEventListener('resize', initialHightlightLocation);
buttons.forEach(button => button.addEventListener('click', handleClick));