var thumbnails = document.querySelectorAll('.gallery-list__item');
var big = document.querySelector('.wrapper');
var bgs = [
  'img/bg1.jpg',
  'img/bg2.jpg',
  'img/bg3.jpg',
  'img/bg4.jpg',
  'img/bg5.jpg',
  'img/bg6.jpg',
];

var addBg = function (thumbnail, bg) {
  thumbnail.addEventListener('click', function () {
    big.style.backgroundImage = 'url(../' + bg + ')';
    thumbnail.classList.toggle('gallery-list__item--active');
  });
};

for (var i = 0; i < thumbnails.length; i++) {
    addBg(thumbnails[i], bgs[i]);
}
