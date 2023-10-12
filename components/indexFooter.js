document.addEventListener("DOMContentLoaded", function () {
	var footerTemplate = `
    <div class="footContainer" id="footer-container">
  <div class="wrapper">
    <div id="footer-icon"> <img src="../images/nexavix_logo.png" alt="Nexavix" width="255">
        <br><br>  <img src="../images/silverPartner_logo.png" alt="Nexavix" width="255">
    </div>
    <div id="footer-contact">
      <h6>Contact Us</h6>
      <br>
      <p><strong>EAST COAST:</strong><br> 418 Broadway, Ste 4915,<br> Albany, NY 12207.</p>
      <p><strong>WEST COAST:</strong><br> 1900 Camden Ave San Jose,<br> CA 95124.</p>
      <p> <i class="yellow-icon fas fa-envelope" aria-hidden="true" style="margin-right: 5px;"></i> <a
          href="mailto:aly@nexavix.com" style="margin-right: 15px;">aly@nexavix.com</a></p>
      <p> <i class="yellow-icon fa fa-phone" aria-hidden="true" style="margin-right: 5px;"></i> <a
          href="tel: 1 (838)-910-3304" style="margin-right: 15px;">East: (838)-910-3304</a></p>
      <p> <i class="yellow-icon fa fa-phone" aria-hidden="true" style="margin-right: 5px;"></i> <a
          href="tel: 1 (408)  878-6773" style="margin-right: 15px;">West: (408) 878-6773</a></p>
    </div>
    
      <div id="footer-form">
        <h6>Quick links</h6>
        <br>
        <div><a href="index.html">Home</a></div>
        <div><a href="pages/sapBusinessOne.html">Sap Business One</a></div>
        <div><a href="pages/industries.html?tab=tab1">Industries</a></div>
        <div><a href="pages/services.html?tab=tab1">Services</a></div>
        <div><a href="pages/about.html">About Us</a></div>
        <div><a href="pages/blogs.html">Blog</a></div>
        <div><a href="pages/wholesale.html">Wholesale</a></div>
        <div><a href="pages/trial.html">Free Trial</a></div>
      </div>
      <div id="footer-social">
      <h6>Social Media</h6>
      <br>
      <p>
        <a class="header-social" href="https://www.facebook.com/nexavix/" target="_blank">
          <span class="fab fa-facebook-f"></span>
        </a>
        <a class="header-social" href="https://www.linkedin.com/company/nexavix/" target="_blank">
          <span class="fab fa-linkedin-in"></span>
        </a>
        <a class="header-social" href="https://twitter.com/nexavix" target="_blank">
          <span class="fab fa-twitter"></span>
        </a>
      </p>

    </div>
  </div>
  <div class="wrapper credits">
    <div id="credits-left"> © Copyright 2023 Nexavix. All Rights Reserved.</div>
  </div>
      `;

	// Find all divs with class "footer-placeholder" and replace them with the footer
	var placeholders = document.querySelectorAll(".footer-placeholder");
	placeholders.forEach(function (placeholder) {
		placeholder.outerHTML = footerTemplate;
	});
});
