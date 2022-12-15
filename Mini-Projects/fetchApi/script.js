const panda_result = document.getElementById('panda_result');
const dog_result = document.getElementById('dog_result');
const panda_btn = document.getElementById('panda_btn');
const dog_btn = document.getElementById('dog_btn');

panda_btn.addEventListener('click', getRandomPanda);
dog_btn.addEventListener('click', getRandomDog);

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      dog_result.innerHTML = `<img src="${data.message}" class="img" />`;
    });
}

function getRandomPanda() {
  fetch('https://some-random-api.ml/animal/panda')
    .then(res => res.json())
    .then(data => {
      panda_result.innerHTML = `<img src="${data.image}" class="img" />`;
    });
}
