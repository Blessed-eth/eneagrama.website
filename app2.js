function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const lines = document.querySelectorAll('.line');
  
  hamburger.classList.toggle('active');
  
  lines.forEach(line => {
    line.classList.toggle('active');
  });
} // Added closing brace

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

});
