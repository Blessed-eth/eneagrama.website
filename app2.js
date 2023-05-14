const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');
let expandedBox = null;
let hoverTimeout;

// Expand box on hover
boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    hoverTimeout = setTimeout(() => {
      if (!box.classList.contains('expanded')) {
        boxes.forEach(otherBox => {
          if (otherBox !== box && !otherBox.classList.contains('expanded')) {
            otherBox.classList.add('non-expandable');
          }
        });
        box.classList.add('expanded');
        expandedBox = box;
        body.classList.add('no-scroll');
      }
    }, 500);
  });

  box.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
  });
});

// Collapse box on click outside of box
document.addEventListener('click', event => {
  if (expandedBox !== null && !expandedBox.contains(event.target)) {
    expandedBox.classList.remove('expanded');
    boxes.forEach(box => {
      box.classList.remove('non-expandable');
    });
    expandedBox.style.cssText = "";
    expandedBox = null;
    body.classList.remove('no-scroll');
  }
});

// Collapse box on press of escape key
document.addEventListener('keydown', event => {
  if (expandedBox !== null && event.key === 'Escape') {
    expandedBox.classList.remove('expanded');
    boxes.forEach(box => {
      box.classList.remove('non-expandable');
    });
    expandedBox.style.cssText = "";
    expandedBox = null;
    body.classList.remove('no-scroll');
  }
});