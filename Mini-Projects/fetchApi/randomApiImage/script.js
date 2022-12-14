const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      dog_result.innerHTML = `<img src="${data.message}" class="img" />`;
    });
}

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
      cat_result.innerHTML = `<img src="${data.file}" class="img" />`;
    });
}
