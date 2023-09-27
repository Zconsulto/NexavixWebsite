document.addEventListener("DOMContentLoaded", function () {
  var footerTemplate = `
  <!-- Left Footer Section -->
  <div class="footer-left col-md-4 col-sm-6">
      <h2 style="font-weight: bold; color: #FF8C00;">Why Nexavix</h2><br>
      <p style="color: black;">
          Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
      </p>
      <div class="icons">
          <a href="https://www.facebook.com/nexavix/" target="_blank"><span class="fab fa-facebook-f" ></span></a>
          <a href="https://twitter.com/nexavix" target="_blank"><span class="fab fa-twitter" ></span></a>
          <a href="https://www.linkedin.com/company/nexavix/" target="_blank"><span class="fab fa-linkedin-in"></span></a>
      </div>
      <p class="name">Nexavix &copy; 2023</p>
  </div>

  <!-- Center Footer Section -->
  <div class="footer-center col-md-4 col-sm-6">
      <br><br>
      <div>
      <i class="fa fa-map-marker" ></i>
      <p> East Coast  <br> 418 Broadway, Ste 4915, Albany, NY 12207. </p>
      </div>
      <div>
          <i class="fa fa-map-marker" ></i>
          <p> West Coast  <br> 1900 Camden Ave San Jose, CA 95124.</p>
          </div>
  </div>

  <!-- Right Footer Section -->
  <div class="footer-right col-md-4 col-sm-6">
      <a href="#" class="logo">
          <img src="https://www.nexavix.com/images/nexavix_logo.png" alt="Company's logo" style="width: 300px; height: 48px;">
      </a>
      <nav class="menu">
          <a href="../index.html">Home</a> |
          <a href="about.html">About</a> |
          <a href="contact.html">Contact</a> |
          <a href="services.html">Services</a> |
          <a href="blogs.html">Blogs</a> |
          <br>
          <a href="wholesale.html">Wholesale Special pricing</a> |
          <a href="demo.html">Free Demo</a> |
          <a href="trial.html">Free Trial</a>
      </nav>
  </div>
    `;

  // Find all divs with class "footer-placeholder" and replace them with the footer
  var placeholders = document.querySelectorAll(".footer-placeholder");
  placeholders.forEach(function (placeholder) {
    placeholder.outerHTML = footerTemplate;
  });
});
