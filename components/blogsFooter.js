document.addEventListener("DOMContentLoaded", function () {
	var footerTemplate = `
    <div class="footContainer" id="footer-container">
  <div class="wrapper">
    <div id="footer-icon">
    <img src="../images/zcons/logo.png" alt="Zconsulto-Logo" width="255">
    </div>
     <div id="footer-contact">
      <h6>Contact Us</h6>
      <br>
      <p>418 Broadway, Ste 4915,<br> Albany, NY 12207.</p>
      <p> <i class="yellow-icon fas fa-envelope" aria-hidden="true" style="margin-right: 5px;"></i> <a
          href="mailto:info@zconsulto.com" style="margin-right: 15px;">info@zconsulto.com</a></p>
      <p> <i class="yellow-icon fa fa-phone" aria-hidden="true" style="margin-right: 5px;"></i> <a
          href="tel: 1 (929) 332-7886" style="margin-right: 15px;">(929) 332-7886</a></p>
    </div>

      <div id="footer-form">
        <h6>Quick links</h6>
        <br>
        <div><a href="../index.html">Home</a></div>
        <div><a href="../pages/sapBusinessOne.html">SAP Business One</a></div>
        <div><a href="../pages/industries.html?tab=tab1">Industries</a></div>
        <div><a href="../pages/services.html?tab=tab1">Services</a></div>
        <div><a href="../pages/about.html">About Us</a></div>
        <div><a href="../pages/blogs.html">Blog</a></div>

        <div><a href="../pages/trial.html">Free Trial</a></div>
      </div>
  </div>
  <div class="wrapper ">
  <div class="icons">
               <a class="header-social" href="https://www.linkedin.com/company/zconsulto/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="header-social" href="https://www.facebook.com/people/Zconsulto/100094921483542/" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a class="header-social" href="https://open.spotify.com/show/79Tt6w0oa0C2MM9STxD11W?si=lqbXsGOqRIeTJ9uj9gP20Q&nd=1&dlsi=96d1cf23ce8f4f95" target="_blank">
           <i class="fab fa-spotify"></i>
          </a>
           <a class="header-social" href="https://apple.co/3u1iRTf" target="_blank">
    <i class="fas fa-podcast"></i>
  </a>
   </div>
   </div>
  <div class="wrapper credits">
    <div id="credits-left"> © Copyright 2023 ZConsulto. All Rights Reserved.</div>
  </div>
      `;

	// Find all divs with class "footer-placeholder" and replace them with the footer
	var placeholders = document.querySelectorAll(".footer-placeholder");
	placeholders.forEach(function (placeholder) {
		placeholder.outerHTML = footerTemplate;
	});
});
