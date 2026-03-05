//Cargar el JSON al iniciar 
fetch('../data/galeria.json')
.then(response => response.json())
.then(items => {
    // Guardar los datos en una variable 
    window.galleryItems = items;

    // Mostrar todas las imágenes al cargar 
    filterGallery('all');

    // Configurar los botones de filtro
    document.querySelectorAll('.filter-btn').forEach(boton => {
        boton.addEventListener('click', function() {
            // Quitar la clase 'active de todos los botones 
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Añadir 'active al botón clickeado
            this.classList.add('active');

            // Filtrado por la categoría seleccionada 
            filterGallery(this.dataset.filter);
        });
    });
})
.catch(error => {
    console.error('Error:', error);
    document.getElementById('gallery-container').innerHTML = `
        <p class="error">Error al cargar las imágenes. Recarga la página.</p>
        `;
});

// Función para filtrar y mostrar las imágenes 
function filterGallery(categoria) {
    const contenedor  = document.getElementById('gallery-container');
    contenedor.innerHTML = '';

    // Filtrar las imágenes (0 mostrar todas si es 'all')

    const imagenesFiltradas = categoria === 'all' ? window.galleryItems : window.galleryItems.filter(item => item.category === categoria);

    // Mostrar las imágenes filtradas 
    imagenesFiltradas.forEach(imagen => {
        contenedor.innerHTML += `
             <div class="gallery-item">
                  <a href="${imagen.src}" data-lightbox="gallery" data-title="${imagen.title}">
                      <img src="${imagen.thumb}" alt="${imagen.title}">
                  </a>
             </div>
        `;
    });
}