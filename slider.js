const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const ad = document.querySelector('.ad');
const navigation = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  navigation.forEach(dot => {
    dot.classList.remove('active');
  });
  navigation[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide === 0) {
    showSlide(slides.length - 1);
  } else {
    showSlide(currentSlide - 1);
  }
}

setInterval(() => {
  nextSlide();
}, 5000);

ad.addEventListener('click', () => {
  window.open('https://численныеметоды.рф/', '_blank');
});

navigation.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

showSlide(0);

const header = document.querySelector('.main-header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Скролл вверх
    header.classList.remove('hidden');
  } else {
    // Скролл вниз
    if (currentScrollPos > header.offsetHeight) {
      header.classList.add('hidden');
    }
  }
  prevScrollPos = currentScrollPos;
});
