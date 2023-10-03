$(window).scroll(function () {
    var y = $(this).scrollTop();  
    var footerTop = $('#footer-container').offset().top - $(window).height();  
    var firstSectionTop = $('.highlight-section').first().offset().top - 20;  
    var stickyBox = $('#sticky-box');  
    
    var originalTopPosition = '0px';  

    // Iterate through each section
    $('.highlight-section').each(function () {
        var sectionId = $(this).attr('id');
        var sectionTop = $(this).offset().top - 450;
        var correspondingListItem = $(`ul li:contains("${sectionId.replace(/-/g, ' ')}")`);

        if (y >= sectionTop && !correspondingListItem.hasClass('active')) {
            $('ul li').removeClass('active');  
            correspondingListItem.addClass('active');  
            
            stickyBox.stop().animate({top: '0px'}, 200, function() {
                $(this).animate({top: originalTopPosition}, 200);
            });
        }
    });
    
    if (y >= footerTop) {
        // Move the sticky box upwards but keep it partially visible
        stickyBox.stop().animate({top: '-100px'}, 300);
    } else if (y < firstSectionTop-50) {
        // Gradually move to the desired top position when above the first section
        stickyBox.show().stop().animate({top: (firstSectionTop-40) + 'px', opacity: 1}, 300);
    } else {
        // Ensure the sticky box is shown elsewhere on the page
        stickyBox.show().stop().animate({top: originalTopPosition, opacity: 1}, 300);
    }
});
