// Función para esconder la barra de navegacion al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    let lastScroll = 0; 
    const navbar = document.getElementById('menuprincipal');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si estamos bajando ocultar
    if (currentScroll > lastScroll && currentScroll > 50) {
        navbar.style.top = "-80px"; // Lo escondemos arriba 
    } else {
        navbar.style.top = "0"; // Lo mostramos
    }

    lastScroll = currentScroll;
  });
});

const hamburguesa = document.getElementById('hamburguesa');
const listamenu = document.getElementById('listamenu');

hamburguesa.addEventListener('click', () => {
    listamenu.classList.toggle('show'); // Agrega o quita la clase 'show'
});