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

document.addEventListener('DOMContentLoaded', function() {
    let messages = [
        'LET SAP BUSINESS ONE AND NEXAVIX HELP YOU',
        'SAP Business One is a highly sophisticated ERP system for the fast-growing small-to-mid size business market!',
        'SAP Business One integrates the entire business into one product and allows for clear visibility into all operations.',
        'SAP Business One syncs all critical business information in real time for immediate use.',
        'Nexavix will be your guiding star, illuminating every step of your journey.'
        // Add more messages as required
    ];

    let currentIndex = 0;

    setInterval(function() {
        // Get the h2 element
        let dynamicTextElement = document.getElementById('dynamicText');

        // Update the text inside the h2 tag
        dynamicTextElement.innerText = messages[currentIndex];

        // Cycle to the next message
        currentIndex++;
        if (currentIndex >= messages.length) {
            currentIndex = 0; // Reset back to the first message
        }
    }, 6000); // Update every 5 seconds
});




