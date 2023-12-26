AOS.init({
    // Global settings
    duration: 1000, // Duration of animation in milliseconds
    easing: 'ease-in-out', // Default easing for AOS animations
    once: true, // Whether animation should happen only once
    // ... more options if needed
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Select all benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
  
    // Add hover event listeners to benefit items
    benefitItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
      });
  
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
    });
  
    // Select the 'Schedule a Demo' button
    const ctaButton = document.querySelector('.btn-cta');
  
    // Add click event listener to the button
    ctaButton.addEventListener('click', () => {
      // Placeholder: Implement what should happen when the button is clicked
      // For example, open a modal or redirect to a contact page
      alert('Demo scheduled!');
    });
  });
  
  