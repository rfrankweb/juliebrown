import Bound from 'bounds.js/dist/bounds.js';
const boundary = Bound({
  margins: {
    bottom: 100
  }
});
const img = document.querySelectorAll('img');
boundary.watch(img, () => {
  console.log("hey");
});
