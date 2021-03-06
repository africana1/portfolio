//select DOM elements

function querySelector(element) {
  return document.querySelector(element);
}

const menuBtn = querySelector('.btn-menu');
const menu = querySelector('.menu');
const menuNav = querySelector('.menu-nav');
const menuBranding = querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

function footerDate() {
  const dateCopyright = querySelector('#dateCopyright');
  let year = new Date();
  year = year.getFullYear();
  dateCopyright.innerText = year;
}

//set initial state of menu
let showMenu = false;

//menu btn event listener
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    showMenu = false;
  }
}
