//* === DOMContentLoaded -> esperar hasta que todo el documento esté listo, que el html se haya descargado === 

document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    //* === seleccionar todas las imagenes para la galería, desde la 1 hasta la 12 ===

    for(let i = 1; i <= 12; i++) {

        //* === generar la imagen ===
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        //* === crear atributo personalizado en html para referenciar cada imagen ===
        imagen.dataset.imagenId = i;

        //* === añadir la función de "mostrarImagen" ===
        imagen.onclick = mostrarImagen;

        //* === generar la lista ===
        const lista = document.createElement('LI');

        //* === agregar la imagen a la lista ===
        lista.appendChild(imagen);

        //* === agregar los "li" a la galería ===
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {

    //* === devuelve id de imagen, en string === 
    //console.log(typeof e.target.dataset.imagenId);

    //* === convertir string a number ===
    const id = parseInt(e.target.dataset.imagenId);     
    
    //* === crear una imagen ===
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    //* === crear un div y agregar la imagen ===
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //* === cuando se da click, cerrar la imagen ===
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    } 

    //* === botón para cerrar la imagen ===
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');  

    //* === cuando se presiona, se cierra la imagen ===
    cerrarImagen.onclick = function() {
        overlay.remove();
    }

    //* === agrearlo al overlay ===
    overlay.appendChild(cerrarImagen);

    //* === mostrarlo en el html ===
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}