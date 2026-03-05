
const gallery = document.querySelectorAll(".gallery img"); // todas las imagenes miniatura
        const lightbox = document.getElementById("lightbox"); // contenedor
        const lightboxImg = document.getElementById("lightbox-img"); // Imagengrande
        const closeBtn = document.getElementById("close"); // Botón cerrar
        const prevBtn = document.getElementById("prev"); // Flecha izquierda
        const nextBtn = document.getElementById("next"); // Flecha deecah

        let currentProductos = 0;

        // función para mostrar unna imagen en el lightbox
        function showImgen(productos) {
            lightbox.style.display = "flex"; // Mostramos el lightbox
            lightboxImg.src = gallery[productos].src; // Cambiamos la imagen
            currentProductos = productos; // Guardamos indice actual
        } 

        // Añadimos evento click a cada miniatura
        gallery.forEach((img, productos) => {
            img.addEventListener("click", () => {
                showImgen(productos);
            });
        });

        // Botón cerrar
        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        // Navegar a imagen anterior
        prevBtn.addEventListener("click", () => {
            currentProductos = (currentProductos - 1 + gallery.lenht) % gallery.length;
            showImgen(currentProductos);
        });

        // Navegar a imagen siguiente
        nextBtn.addEventListener("click", () => {
            currentProductos = (currentProductos + 1) % gallery.length;
            showImgen(currentProductos);
        });

        // Cerrar con click fuera de la imagen
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
