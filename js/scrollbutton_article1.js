const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');

buttonRight.onclick = function () {
  document.getElementById('container_article1').scrollLeft += 200;
};
buttonLeft.onclick = function () {
  document.getElementById('container_article1').scrollLeft -= 200;
};