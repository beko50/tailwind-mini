const btn = document.getElementById('menu-btn')
const nav= document.getElementById('menu')

btn.addEventListener('click',()=>{
    btn.classList.toggle('open')   //toggle between close button and hamburger menu
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})