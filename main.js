const burgerBtn = document.querySelector('.header-nav-burger');
const navList = document.querySelector('.header-nav-list');

const navOpen = () => {
  navList.classList.toggle('active');
};

const navClose = () => {
  navList.classList.remove('active');
}

burgerBtn.addEventListener('click', navOpen);

const navItems = document.querySelectorAll('.header-nav-item');
console.log(navItems);

navItems.forEach(item => {
  item.addEventListener('click', navClose)
});

