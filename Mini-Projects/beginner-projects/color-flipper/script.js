const output = document.querySelector('.bg-output');
const textOutput = document.querySelector('.text-output');
const Button = document.querySelector('.btn');
const body = document.querySelector('body');

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

Button.addEventListener('click', changColor);

function changColor() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  textOutput.textContent = hex;
  textOutput.style.color = hex;
  body.style.backgroundColor = hex;
}
