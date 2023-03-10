//JS code to make the image alternate between three positions top, center, bottom in projects
let counter = 0;

const img = document.querySelector('.size3 img');

function showTop() {
  img.style.objectPosition = 'top';
}

function showCenter() {
  img.style.objectPosition = 'center';
}

function showBottom() {
  img.style.objectPosition = 'bottom';
}

const interval = setInterval(() => {
  if (counter === 0) {
    showTop();
  } else if (counter === 1) {
    showCenter();
  } else if (counter === 2) {
    showBottom();
  }

  counter = (counter + 1) % 3;
}, 1000);