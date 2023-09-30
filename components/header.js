document.addEventListener("DOMContentLoaded", function () {
  var headerTemplate = `
    <section class="top_bar">
    <div class="container">
         <div class="row" >
              <div class="tob_bar_left_col hidden-xs col-sm-6 col-md-6" style="display: flex; width:50%; align-items: center; justify-content: center;">
                   <ul class="top_menu">
                      <a href="../index.html#Contact" style="color: orange;"><b>Request 1:1 Personalized Demo!</b></a>
                   </ul>
              </div>
              <div class="tob_bar_right_col col-xs-12 col-sm-6 col-md-6" style="display: flex; width:50%;align-items: center; justify-content: center;">
                   <p style="color: orange;">Call Us!&nbsp;&nbsp;
                    <b>
                    <a href="tel: 1 (408)  878-6773" style="color: black; font-style: normal;" > (929)-732-7022</a>
                    </b>
                   </p>
              </div>
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
