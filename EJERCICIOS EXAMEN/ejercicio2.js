document.getElementById('addButton').addEventListener('click', function () {
    const imageUrl = document.getElementById('imageUrl').value;
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Imagen de la galería';
        
        const gallery = document.getElementById('gallery');
        gallery.appendChild(img);
        
        document.getElementById('imageUrl').value = ''; 
    } else {
        alert('Por favor, ingrese una URL de imagen válida.');
    }
});