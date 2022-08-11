const menuHamb = document.querySelector('.menuHamb');
const menuNav = document.querySelector('.menuNav');

console.log(menuHamb)
console.log(menuNav)

menuHamb.addEventListener('click', () => {
    menuNav.classList.toggle('spread')
})

// Evento que se ejecuta cada vez que se de clic en cualquier parte de lapantalla
window.addEventListener('click', e => {
    //a la clase menuNav le asigna la clase spread
    if (menuNav.classList.contains('spread')
        //si da clic en un lugar diferente a menuNav  menu se desaparece
        && e.target != menuNav && e.target != menuHamb) {
        menuNav.classList.toggle('spread')
    }
})