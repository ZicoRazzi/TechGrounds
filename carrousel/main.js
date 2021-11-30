

const prev = document.querySelector('.btn_prev')
const next = document.querySelector('.btn_next')
const images = document.querySelector('.slider_container').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next')
})

next.addEventListener('click', () => {
  nextImage('prev')
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('first')
  }
  images[index].classList.add('first')

  
}