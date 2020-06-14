let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let leftNav = document.querySelector('.leftNav')
let rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-res')
    leftNav.classList.toggle('v-class-res')
    nav.classList.toggle('h-nav-res')
})
