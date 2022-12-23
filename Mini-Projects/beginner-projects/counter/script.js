const CounterText = document.querySelector('.counter-text');
const Number = document.querySelector('.counter-number');
const btns = document.querySelectorAll('.btn');

let num = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', e => {
    const style = e.currentTarget.classList;
    if (style.contains('decrease')) {
      num--;
    } else if (style.contains('increase')) {
      num++;
    } else if (style.contains('reset')) {
      num = 0;
    }
    Number.textContent = num;
  });
});
