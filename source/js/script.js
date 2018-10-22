var toggleNav = document.querySelector(".main-nav__switcher");
var showMenu = document.querySelector(".main-nav__list");

showMenu.classList.remove("main-nav__list--noscript");

toggleNav.addEventListener("click", function (evt) {
  evt.preventDefault();


  if (this.classList.contains("main-nav__switcher--hamburger")) {
    this.classList.remove("main-nav__switcher--hamburger");
    this.classList.add("main-nav__switcher--closer");

    showMenu.classList.add("main-nav__list--noscript");
    console.log(showMenu);
  } else {
    this.classList.remove("main-nav__switcher--closer");
    this.classList.add("main-nav__switcher--hamburger");

    showMenu.classList.remove("main-nav__list--noscript");
    console.log(showMenu);
  };

//popup.classList.add("modal-show");
//usrname.focus();
});
