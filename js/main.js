function scrollHeader(){
    const header = document.getElementById('header')
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader);



document.addEventListener('DOMContentLoaded', function() {
    // Your Swiper initialization code here
    var swiperPopular = new Swiper('.popular__container', {
        spacebetween: 32,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView:'auto',
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});

const accordionItems=document.querySelectorAll('.value__accordion-item');

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector(".value__accordion-header");
    accordionHeader.addEventListener('click', ()=>{
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if(openItem && openItem!== item)
        {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector(".value__accordion-content");
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height=accordionContent.scrollHeight + 'px '
    item.classList.add('accordion-open')

    } 
}

/****SCROLL SECTIONS ACTIVE LINK ******/

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


const sections = document.querySelectorAll('.nav__link')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('href').slice(1),
        navLink = document.querySelector('.nav__menu a[href="#' + sectionId + '"]')

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    })
}


scrollActive();

window.addEventListener('scroll', scrollActive)

function scrollUp(){
    const scrollUp= document.getElementById('scroll-up');

    if(this.scrollY >=350) 
    {
        scrollUp.classList.add('show-scroll')
    }
    else{
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button');
const darkTheme = 'darkTheme';
const iconTheme = 'fa-moon'; // Changed from 'fa-sun'

let selectedTheme = localStorage.getItem('selected-theme');
let selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-sun ' : 'fa-regular fa-moon';



if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'fa-regular fa-sun' ? 'add' : 'remove'] (iconTheme)
//     console.log(selectedTheme);
// console.log(selectedIcon);
    
}

themeButton.addEventListener('click' ,()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    selectedTheme = getCurrentTheme();
    selectedIcon = getCurrentIcon();
    console.log(selectedTheme);
    console.log(selectedIcon);
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer_container`)
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom' })
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})