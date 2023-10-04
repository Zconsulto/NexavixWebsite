$(window).scroll(function () {
    // If window width is 768px or less, return and do nothing
    if ($(window).width() <= 1400) {
        return;
    }
    
    var y = $(this).scrollTop();  
    var footerTop = $('#footer-container').offset().top - $(window).height();  
    var firstSectionTop = $('.highlight-section').first().offset().top - 20;  
    var lastSectionTop = $('.highlight-section').last().offset().top - 20;
    var stickyBox = $('#sticky-box');  
    
    // If scroll position is past the first section, fix the sticky box at the top.
    // Otherwise, position it absolute at the first section's top position.
    if (y >= firstSectionTop) {
        stickyBox.css({
            'position': 'fixed',
            'top': '0px'
        });
    } else {
        stickyBox.css({
            'position': 'absolute',
            'top': firstSectionTop + 'px'
        });
    }
    
    // Iterate through each section
    $('.highlight-section').each(function () {
        var sectionId = $(this).attr('id');
        var sectionTop = $(this).offset().top - 450;
        var correspondingListItem = $(`ul li:contains("${sectionId.replace(/-/g, ' ')}")`);
        
        if (y >= sectionTop && !correspondingListItem.hasClass('active')) {
            $('ul li').removeClass('active');  
            correspondingListItem.addClass('active');  
        }
    });

});
