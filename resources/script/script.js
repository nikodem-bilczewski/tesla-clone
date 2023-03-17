const menuBtn = document.getElementById("menu__btn");
const btnClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const aside = document.querySelector("aside");
const btnScroll = document.querySelector(".btn__scroll button");
const section2 = document.querySelector(".scroll__to");
const navCenter = document.querySelector(".nav__center");
const navRight = document.querySelector(".nav__right");
const nav = [navCenter, navRight];

const toggleNav = function (e) {
  const target = e.target.closest("a");
  if (!target || target === null) return;
  target.classList.toggle("is__active");
};

nav.forEach((el) => el.addEventListener("mouseover", toggleNav));

nav.forEach((el) => el.addEventListener("mouseout", toggleNav));

const toggleMenu = () => {
  overlay.classList.toggle("is--active");
  aside.classList.toggle("is--active");
};


[menuBtn, btnClose, overlay].forEach((el) => {
  el.addEventListener("click", toggleMenu);
});

window.addEventListener("resize", function () {
  if (this.innerWidth <= 1200) {
    menuBtn.classList.add("btn__background");
  } else {
    menuBtn.classList.remove("btn__background");
  }
});
