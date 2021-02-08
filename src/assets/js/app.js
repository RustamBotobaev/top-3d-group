const sidebar = document.getElementById('sidebar'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('sidebar-close')


toggleMenu = addEventListener('click', ()=> {
    sidebar.classList.toggle('show')
})

closeMenu = addEventListener('click', ()=> {
    sidebar.classList.remove('show')
})
