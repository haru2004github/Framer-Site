let navIcon = document.querySelector(".navIcon")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let navDisplay = document.querySelector(".navDisplay")

navIcon.addEventListener('click' ,()=>{
    one.classList.toggle('active')
    two.classList.toggle('active')
    three.classList.toggle('active')
    navDisplay.classList.toggle('active')
})

// scroll reval
ScrollReveal().reveal('.headline',{
    origin: 'bottom',
    distance: '-30px' ,
    duration : 650,
    interval: 50,
    delay:200,
    reset : true,
   
   });