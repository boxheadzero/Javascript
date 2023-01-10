const reviews = [
  {
    id: 1,
    name: 'Anna Vijitta',
    career: 'Model',
    img: './img/profile-1.jpg',
    description: 'Very easy to use. House design is the real deal!',
  },
  {
    id: 2,
    name: 'Jone Leyne',
    career: 'Software Engineer',
    img: './img/profile-2.jpg',
    description:
      'The service was excellent. Great job, I will definitely be ordering again! It really saves me time and effort. House design is exactly what our business has been lacking.',
  },
  {
    id: 3,
    name: 'Bill Stoner',
    career: 'Bussiness man',
    img: './img/profile-3.jpg',
    description:
      "I am really satisfied with my House design. I didn't even need training. Nice work on your House design. House design saved my business.",
  },
  {
    id: 4,
    name: 'Sara Holmes',
    career: 'Racer',
    img: './img/profile-4.jpg',
    description:
      'Since I invested in House design I made over 100,000 dollars profits. I love your system.',
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const career = document.getElementById('career');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.arrow-prev');
const nextBtn = document.querySelector('.arrow-next');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 3;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  career.textContent = item.career;
  info.textContent = item.description;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
