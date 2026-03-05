// configuración de Lightbox
lightbox.option({
    'resizeDuration': 20,
    'wrapAround': true,
    'albumlabel': 'Imagen %1 de %2'
});

// Función para cargar el JSON y mostrar la galería
async function loadGallery() {
    try {
        const response = await fetch('../data/galeria.json');

        if (!response.ok) {
            throw new Error ('No se puede cargar galeria.json');
        }

        const galleryItems = await response.json();
        displayGallery(galleryItems);
    } catch (error) {
        console.error("Error al cargar galería:", error);
        document.getElementById('gallery-container').innerHTML = `
         <p class="error-message">No se pudieron cargar las imágenes. Por favor, intenta cargar la página.</p>
         `;
    }
}

// Función para mostrar las imágenes en la galería
function displayGallery(items, filter = 'all') {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer. innerHTML = '';

    const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

    filteredItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = item.category;
        
        galleryItem.innerHTML = `
            <a href="${item.src}" data-lightbox="galeria" data-title="${item.title}">
            <img src="${item.thumb}" alt="${item.title} loading="lazy">
            <div class="gallery-caption">${item.title}</div>
             </a>
    `;
    galleryContainer.appendChild(galleryItem);

    });
}

// Función para  configurar los botones de filtro
function filterGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', async function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');

            // Recargar galería con el filtro seleccionado
            try {
                const response = await fetch('../data/galeria.json');
                const galleryItems = await response.json();
                displayGallery(galleryItems, this.dateset.filter);
            } catch (error) {
                console.error('Error al filtrar:', error);
            }
        });   
    });
}

// Inicializar cuando el DOM esté listo 
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    filterGallery();
});


