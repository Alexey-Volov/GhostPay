
document.querySelector('.nav-icon').addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    if(this.classList.contains("nav-icon--active")) {
        this.style.transition = "transform 0.5s cubic-bezier(.22,1,.36,1)"
        this.style.transform = "translateX(-130%)"
        this.style.transition = "translateX 0.5s easy-in"
    } else {
        this.style.transform = "translateX(0)"
        this.style.transition = "translateX 0.5s easy-out"
    }
    
})

const nav = document.querySelector('.navigation');
const over = document.querySelector('#body')
document.querySelector('.nav-icon').addEventListener('click', function () {
    nav.classList.toggle('nav--active');
    over.classList.toggle('overflow');
});
const navLinks = document.querySelectorAll('.navigation a');
const navIcon = document.querySelector('.nav-icon');
navLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        navIcon.classList.remove('nav-icon--active'); 
        nav.classList.remove('nav--active'); 
        over.classList.toggle("overflow");
    });
});

let anchor = document.querySelector("#anchor")
window.addEventListener("scroll", function() {
    let y = this.scrollY;
    if(y > 200) {
        anchor.style.opacity = 1;
    } else if(y === 0) {
        anchor.style.opacity = 0;
    }
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
