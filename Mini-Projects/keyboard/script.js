'use strict';

const events = document.querySelector('.event');
const keyEvent = document.querySelector('.event-key .event-value');
const keyCodeEvent = document.querySelector('.event-keyCode .event-value');
const CodeEvent = document.querySelector('.event-code .event-value');
const whichEvent = document.querySelector('.event-which .event-value');
const shiftKey = document.querySelector('.key-shift .key-status');
const ctrlKey = document.querySelector('.key-ctrl .key-status');
const altKey = document.querySelector('.key-alt .key-status');
const keyboard = document.querySelector('.keyboard');
const keyRow = keyboard.querySelectorAll('.row-key');

/* function keyboardEvents(e) {
  e.preventDefault();
  keyEvent.textContent = e.key;
  CodeEvent.textContent = e.code;
  whichEvent.textContent = e.which;
  keyCodeEvent.textContent = e.keyCode;
  activeKey(e);
}
window.addEventListener('keydown', keyboardEvents); */

function keyboardEvents(e) {
  e.preventDefault();
  activeKey(e);
  if (e.key === ' ') {
    keyEvent.style.fontStyle = 'italic';
    keyEvent.textContent = '(space)';
  } else {
    keyEvent.textContent = e.key;
    keyEvent.style.fontStyle = 'normal';
  }
  keyCodeEvent.textContent = e.keyCode;
  CodeEvent.textContent = e.code;
  whichEvent.textContent = e.which;
}

function activeKey(e) {
  keyRow.forEach(key => {
    if (e.code === key.dataset.spkey) {
      key.classList.add('active');
    } else if (e.keyCode == key.dataset.key) {
      key.classList.add('active');
    }
  });
}

function removeClass() {
  keyRow.forEach(key => {
    if (key.classList.contains('active')) {
      key.classList.remove('active');
    }
  });
}

function specialKeys(e) {
  shiftKey.textContent = e.shiftKey;
  ctrlKey.textContent = e.ctrlKey;
  altKey.textContent = e.altKey;
}
window.addEventListener('keydown', specialKeys);
window.addEventListener('keydown', keyboardEvents);
window.addEventListener('keyup', specialKeys);
window.addEventListener('keyup', removeClass);

keyboard.addEventListener('click', function (e) {
  if (e.target.dataset.key) {
    keyCodeEvent.textContent = e.target.dataset.key;
    whichEvent.textContent = e.target.dataset.key;
    keyEvent.textContent = e.target.innerText;
  }
});
