// POSTER video loading: Get the necessary elements
const posterImage = document.getElementById('poster_image');
const video = document.getElementById('rockclimb');

// Add an event listener to start loading the video
video.addEventListener('loadedmetadata', function() {
  // Replace the poster image with the video
  posterImage.style.display = 'none';
  video.style.display = 'block';
  video.play();
});

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const lines = document.querySelectorAll('.line');
  
  hamburger.classList.toggle('active');
  
  lines.forEach(line => {
    line.classList.toggle('active');
  });
}

window.addEventListener('load', () => {
  // Execute your animation initialization code here

  const menuBox = document.querySelector('.menu-box');
  const menuButtons = document.querySelectorAll('.menu_buttons li a');

  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      menuBox.classList.toggle('slide-in');
    });
  }

  if (menuButtons) {
    menuButtons.forEach(button => {
      button.addEventListener('click', function() {
        hamburger.classList.remove('active');
        menuBox.classList.remove('slide-in');
      });
    });
  }

  const myVideo = document.getElementById('rockclimb');

  if (myVideo.autoplay) {
    console.log('autoplay is set to true');
  } else {
    console.log('autoplay is set to false');
  }

  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const bioSection = document.querySelector(".bio");
  const title = document.querySelector("#title_2");
  const bioText = document.querySelector("#biotext");

  function animateOnScroll() {
    const sectionTop = bioSection.getBoundingClientRect().top;
    const sectionHeight = bioSection.offsetHeight;
    const scrollPos = window.scrollY;

    if (sectionTop - window.innerHeight + 10 < scrollPos && sectionTop + sectionHeight > scrollPos) {
      bioSection.classList.add("animated");
    } else {
      bioSection.classList.remove("animated");
    }
  }

  window.addEventListener("scroll", animateOnScroll);

  const button = document.querySelector('.bio_cta');

  button.addEventListener('click', function() {
    // Get the position of the section
    const contactoSection = document.querySelector('#sec-contacto');
    const contactoSectionPosition = contactoSection.offsetTop;

    // Scroll to the section
    window.scrollTo({
      top: contactoSectionPosition,
      behavior: 'smooth'
    });
  });

});
