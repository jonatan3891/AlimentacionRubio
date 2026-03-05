
document.addEventListener("DOMContentLoaded", function() {
   
    const noticiasContenedor = document.getElementById('noticias-contenedor');
    
    fetch('data/noticias.json')
       .then(response => response.json())
       .then(data => {
            console.log(data);
           // const noticiasContenedor = document.getElementById('noticias-contenedor');
            noticiasContenedor.innerHTML = '';

            data.forEach(noticia => {
                const newsCard = document.createElement('div');
                newsCard.className = 'news-card';
                newsCard.innerHTML = `
                   <div class="data">${noticia.fecha}</div>
                   <h3>${noticia.titulo}</h3>
                   <p>${noticia.contenido}</p>
                   ${noticia.imagen ? `<img src="${noticia.imagen}" alt="${noticia.titulo}" style="max-width:100%; margin-top:10px;">` : ''}
                   `;
                      noticiasContenedor.appendChild(newsCard);
            }) 
       }) 
});


