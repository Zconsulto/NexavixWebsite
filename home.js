document.addEventListener("DOMContentLoaded", function() {
  let video = document.getElementById('autoPlayVideo');

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5  // Adjust this value if needed. It means 50% of the video should be visible for the autoplay to trigger.
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, options);

  observer.observe(video);
});

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
