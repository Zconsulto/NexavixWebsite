document.addEventListener("DOMContentLoaded", function () {
	var headerTemplate = `




 <section class="top_bar">

      <div class="row" style=" display: flex;
      flex-wrap: nowrap; ">
           <div class="tob_bar_left_col hidden-xs col-sm-6 col-md-6" style="    display: flex;
           width: 45%;
           align-items: center;
           justify-content: left;
           margin-left: 82px;">

           <p style="color: #f0ab00;height:auto;font-weight: bold;   margin-top: revert; "><i class="fa-solid fa-phone fa-flip-horizontal fa-2xl"></i>&nbsp;&nbsp;</p>
           <div style="
           display: flex;
           justify-content: center;
           align-items: center;">
               <b>
               <a href="tel: 1 (929)-732-7022" style="color: black; font-style: normal;" > East: (929)-732-7022</a>
               <br>
               <a href="tel: 1 (408)  878-6773" style="color: black; font-style: normal;" > West:(408) 878-6773</a>
          </b>
               </div>

         </p>
           </div>
           <div class="tob_bar_right_col col-xs-12 col-sm-6 col-md-6" style="    display: flex;
           gap: 0.2;
           width: 49%;
           align-items: center;
           justify-content: right;
           margin-right: 1px;"">
           <div class="icons">
           <a href="https://www.facebook.com/nexavix/" target="_blank"><span class="fab fa-facebook-f" ></span></a>
           <a href="https://twitter.com/nexavix" target="_blank"><span class="fab fa-twitter" ></span></a>
           <a href="https://www.linkedin.com/company/nexavix/" target="_blank"><span class="fab fa-linkedin-in"></span></a>
           </div>
           <a href="blogs.html" style="border:1px;">BLOG</a>
           <a href="wholesale.html" class="special-link"> WHOLESALE</a>
          <!-- <a href="pages/demo.html" class="special-link">  FREE DEMO</a> -->
           <a href="trial.html" class="special-link"> FREE TRIAL</a>

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

{
	/* <section class="top_bar">
 <div class="container">
      <div class="row" style="display: :grid;
      grid-template-columns: 1fr 1fr; ">
           <div class="tob_bar_left_col hidden-xs col-sm-6 col-md-6" style="display: flex;width:50%;align-items: center;justify-content: left;">

                   <a href="../index.html#Contact" style="color: orange;justify-content: center;    align-items: center;"><b>Request 1:1 Personalized Demo!</b></a>

           </div>
           <div class="tob_bar_right_col col-xs-12 col-sm-6 col-md-6" style="display: flex;width:50%;align-items: center;justify-content: right;"">

                                          <p style="color: #f0ab00;height:auto;font-weight: bold;   margin-top: revert; ">Call Us!&nbsp;&nbsp;</p>
                  <div style="
                  display: flex;
                  justify-content: center;
                  align-items: center;">
                      <b>
                      <a href="tel: 1 (929)-732-7022" style="color: black; font-style: normal;" > EC: (929)-732-7022</a>
                      <br>
                      <a href="tel: 1 (408)  878-6773" style="color: black; font-style: normal;" > WC:(408) 878-6773</a>
                 </div>
                 </b>
                </p>
           </div>
      </div>
 </div>
 </section> */
}
