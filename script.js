const draggable = document.getElementById('container');

let isDragging = false;
let offsetX, offsetY;

// Start dragging
draggable.addEventListener('mousedown', (e) => {
  isDragging = true;
  draggable.style.cursor = 'grabbing';

  // Calculate the offset of the mouse click relative to the div's top-left corner
  offsetX = e.clientX - draggable.offsetLeft;
  offsetY = e.clientY - draggable.offsetTop;
});

// Move the div
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    draggable.style.left = `${e.clientX - offsetX}px`;
    draggable.style.top = `${e.clientY - offsetY}px`;
    draggable.style.position = 'absolute';
  }
});

// Stop dragging
document.addEventListener('mouseup', () => {
  isDragging = false;
  draggable.style.cursor = 'grab';
});