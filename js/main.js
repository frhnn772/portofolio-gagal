
// type js script
var typed = new Typed('.type', {
    // Waits 1000ms after typing "First"
strings: ['Student', 'Human', 'Gamers', 'Programmer'],
typeSpeed:100,
backSpeed:70,
loop:true,
});


/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .3, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})