// AOS Initializer
AOS.init();

var hamburger = document.querySelector('.hamburger');
var closeNav = document.querySelector('.close-nav');
var nav = document.querySelector('.nav');
var body = document.querySelector('body');

hamburger.addEventListener('click', function () {
    nav.classList.add('nav-open');
});

closeNav.addEventListener('click', function () {
    nav.classList.remove('nav-open');
});


var toggleDropdown = document.querySelector(".dropdown-classes");
var classesToggle = document.querySelector(".classes-dropdown-toggle");

classesToggle.addEventListener("click", function() {
    toggleDropdown.classList.toggle("classes-dropdown-toggle_mobile");
});

//Header slider
var img = 0;
var images = [];
var time = 3000;

    //img links
images[0] = 'images/hero-img1.jpeg';
images[1] = 'images/hero-img2.jpg';
images[2] = 'images/hero-img3.jpeg';

var hero = document.querySelector('.hero');

    //Change image
function changeImg() {
    hero.style.backgroundImage = `url(${images[img]})`;
    if (img < images.length - 1) {
        img++;
    } else {
        img = 0;
    }

    setTimeout("changeImg()", time);
}

if(hero != null) {
    window.onload = changeImg;
}

//Fixing the navigation on scroll and social button

var navbar = document.querySelector('.main-nav');
var navOffset = navbar.offsetTop;
var menuBtn = document.querySelector('.menu-button');

function checkPosition() {
    if (window.pageYOffset >= navOffset) {
        navbar.classList.add('navbar-fixed');
        menuBtn.style.right = '10px';
    } else {
        navbar.classList.remove('navbar-fixed');
        menuBtn.style.right = '-135px';
    }
}

window.onscroll = function() {
    checkPosition();
};

//Our trainers slide
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var ourTrainers = document.querySelector('.trainer-belt');
var position = 0;

// rightArrow.addEventListener('click', function() {
//     position += 350;
//    ourTrainers.style.transform = `translateX(-${position}px)`;
//    console.log("desno:" + position);
//    return position;
// });

// leftArrow.addEventListener('click', function() {
//     console.log("levo:" + position);
// });

//Gallery toggle
var galleryContainer = document.querySelector('.gallery-container');
var galleryWrapper = document.querySelectorAll('.gallery-images-wrapper');
var galleryActive = document.querySelector('.active-gallery');
var buttonRight = document.querySelector('.gallery-right');
var buttonLeft = document.querySelector('.gallery-left');

// var currActive = classList.contains('active-gallery');

// galleryContainer.firstElementChild.classList.add('active-gallery');

// buttonRight.addEventListener('click', function() {
//     console.log(galleryWrapper.length);
//     for (i=0; i<=galleryWrapper.length; i++) {
//         galleryWrapper.nextElementSibling.classList.add('active-gallery');
//     }
// });

// buttonLeft.addEventListener('click', function() {
    
// });