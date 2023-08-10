let menu = document.getElementById('menu-bar');
let navbar = document.querySelector('header .container nav');

menu.onclick = () =>{
  navbar.classList.toggle('activate');
};

window.onscroll = () =>{
  navbar.classList.remove('activate');
};
