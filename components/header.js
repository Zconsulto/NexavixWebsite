document.addEventListener("DOMContentLoaded", function () {
	var headerTemplate = `
     <<section class="top_bar">
  <div class="row">
    <div class="top_bar_left_col">
      <p>
        <i class="fa-solid fa-phone fa-flip-horizontal fa-2xl"></i>
        <b>
          <a href="tel:18389103304">East: (838)-910-3304</a><br>
          <a href="tel:14088786773">West: (408) 878-6773</a>
        </b>
      </p>
    </div>
    <div class="top_bar_right_col">
      <div class="icons">
        <a href="https://www.facebook.com/nexavix/" target="_blank"><span class="fab fa-facebook-f"></span></a>
        <a href="https://twitter.com/nexavix" target="_blank"><span class="fab fa-twitter"></span></a>
        <a href="https://www.linkedin.com/company/nexavix/" target="_blank"><span class="fab fa-linkedin-in"></span></a>
      </div>
      <a href="../pages/blogs.html">BLOG</a>
      <a href="../pages/wholesale.html">WHOLESALE</a>
      <a href="../pages/trial.html" class="special-link">FREE TRIAL</a>
      <a href="../index.html#Contact"><button type="button" class="btn btn-warning">Request a Demo</button></a>
    </div>
  </div>
</section>

    `;

	// Find all divs with class "footer-placeholder" and replace them with the footer
	var placeholders = document.querySelectorAll(".header-placeholder");
	placeholders.forEach(function (placeholder) {
		placeholder.outerHTML = headerTemplate;
	});
});
