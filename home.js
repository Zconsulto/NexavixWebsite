document.getElementById('imageLink').addEventListener('click', function(e){
    e.preventDefault();
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = this.href;
    lightbox.style.display = 'flex';
});

function closeLightbox(){
    document.getElementById('lightbox').style.display = 'none';
}
