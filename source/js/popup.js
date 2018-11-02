var button = document.querySelector(".additional");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__button");

var show = function () {
  popup.classList.remove("popup--hidden");
};

var hide = function () {
  popup.classList.add("popup--hidden");
}

button.addEventListener('click', function () {
  show();
});

close.addEventListener('click', function () {
  hide();
});
