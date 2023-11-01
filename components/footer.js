document.addEventListener("DOMContentLoaded", function () {
	var footerTemplate = `
  <div class="footContainer" id="footer-container">
  <div class="wrapper">
    <div id="footer-icon">
    <img src="../images/zcons/logo.png" alt="Nexavix" width="255">
</div>
     <div id="footer-contact">
      <h6>Contact Us</h6>
      <br>
      <p>418 Broadway, Ste 4915,<br> Albany, NY 12207.</p>
      <p> <i class="yellow-icon fas fa-envelope" aria-hidden="true" style="margin-right: 5px;"></i> <a
          href="mailto:info@zconsulto.com" style="margin-right: 15px;">info@zconsulto.com</a></p>
      <p> <i class="yellow-icon fa fa-phone" aria-hidden="true" style="margin-right: 5px;"></i> <a
          href="tel: 1 (347) 607 4093" style="margin-right: 15px;">(347) 607 4093</a></p>
    </div>

      <div id="footer-form">
        <h6>Quick links</h6>
        <br>
        <div><a href="../index.html">Home</a></div>
        <div><a href="sapBusinessOne.html">SAP Business One</a></div>
        <div><a href="industries.html?tab=tab1">Industries</a></div>
        <div><a href="services.html?tab=tab1">Services</a></div>
        <div><a href="about.html">About Us</a></div>
        <div><a href="blogs.html">Blog</a></div>

        <div><a href="trial.html">Free Trial</a></div>
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
