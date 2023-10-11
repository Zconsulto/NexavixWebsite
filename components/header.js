document.addEventListener("DOMContentLoaded", function () {
	var headerTemplate = `
     <section class="top_bar">

     <div class="row" style=" display: flex;
     flex-wrap: nowrap; ">
          <div class="tob_bar_left_col hidden-xs col-sm-6 col-md-6" style="    display: flex;
          width: 45%;
          align-items: center;
          justify-content: left;
          margin-left: 17px;">

          <div style="
          display: flex;
          justify-content: center;
          align-items: center;">
          <p style="color: #f4a71f;height:auto;font-weight: bold;   margin-top: revert; "><i class="fa-solid fa-phone fa-flip-horizontal fa-2xl"></i>&nbsp;&nbsp;</p>
          <b>
               <a href="tel: 1 (838)-910-3304" style="color: black; font-style: normal;" > East: (838)-910-3304</a>
               <br>
               <a href="tel: 1 (408)  878-6773" style="color: black; font-style: normal;" > West: (408) 878-6773</a>
          </b>
          </p>
               </div>


          </div>
          <div class="tob_bar_right_col col-xs-12 col-sm-6 col-md-6" style="    display: flex;
          gap: 0.2;
          width: 52%;
          align-items: center;
          justify-content: right;
          margin-right: 1px;">
          <div class="icons">
          <a href="https://www.facebook.com/nexavix/" target="_blank"><span class="fab fa-facebook-f" ></span></a>
          <a href="https://twitter.com/nexavix" target="_blank"><span class="fab fa-twitter" ></span></a>
          <a href="https://www.linkedin.com/company/nexavix/" target="_blank"><span class="fab fa-linkedin-in"></span></a>
     </div>
          <a href="../pages/blogs.html" style="border:1px;">BLOG</a>
          <a href="../pages/wholesale.html" style="border:1px;">WHOLESALE</a>
          <a href="../pages/trial.html" class="special-link"> FREE TRIAL</a>
          <a href="../index.html#Contact"><button type="button" class="btn btn-warning" style="background-color: #f4a71f;">Request a Demo</button></a>

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
