var menuButton = document.getElementsByClassName('menu-button')[0];
console.log(menuButton);

menuButton.onclick = function(){
    document.getElementsByClassName('menu-button')[0].style.display = 'none';
    document.getElementsByClassName('navbar-content')[0].classList.add('show');
}

