/* abre e fecha o menu quando clicar no hamburguer e x */ 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function () {
       nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu */ 

const links = document.querySelectorAll('nav ul li a')

for(const link  of links){
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// Mudar o header da página quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight){
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    }else{
        // scroll é menor que a altura do header
        header.classList.remove('scroll')
    }
})

// Swiper : Testimonials - Carrosel

const swiper = new Swiper('.swiper', {
    slidesPreView: 1,
    pagination: {
        el: '.swiper-pagination'    
    },
    mouseheel: true,
    Keyboard: true
  });

//   ScrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonial,
     #contact .text, #contact .links`,
    { interval: 100 })

// Back to top
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
})