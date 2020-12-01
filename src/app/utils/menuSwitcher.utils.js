const nav = document.querySelector('.nav'),
  overlay = document.querySelector('.overlay'),
  menuBtn = document.querySelector('.header__btn'),
  logoBtn = document.querySelector('.header__logo');

export function menuCloseUtils() {
  nav.classList.add('nav--deactive');
  nav.classList.remove('nav--active');
  menuBtn.classList.add('btn--deactive');
  menuBtn.classList.remove('btn--active');
  overlay.classList.remove('overlay--active');
}

function menuOpenUtils() {
  nav.classList.add('nav--active');
  menuBtn.classList.add('btn--active');
  nav.classList.remove('nav--deactive');
  overlay.classList.add('overlay--active');
  menuBtn.classList.remove('btn--deactive');
}

export function homeBtnUtils(target, type) {
  if (target.classList.contains('header__logo')) {
    if (type.match(/mousedown/)) {
    
      logoBtn.classList.toggle('header__logo--active');
    }
    
    if (type.match(/mouseup/)) {
      logoBtn.classList.toggle('header__logo--active');
    }
  }
  
}

export function menuSwitcherUtils() {
  nav.classList.contains('nav--active') ? menuCloseUtils() : menuOpenUtils();
}
