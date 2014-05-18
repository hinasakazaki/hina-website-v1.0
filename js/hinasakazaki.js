$(document).ready(function() {
    //red block text quite not working the way I want
    // $('.red-block').hover( function(e) {
    //     $(this).find('.block-text').addClass('block-text_opaque');
    // }, function(e) {
    //     $(this).find('.block-text').removeClass('block-text_opaque');
    // });

        // $('.red-block').hover(function(){
        //    $(this).find('.votecount').addClass('votecount_opaque');
        //  });
        // function(){
        //     $('.red-block').find('img').attr('src', src);
        // });

    $('.red-block').hover( function(e) {
        $(this).find('.redtext').addClass('redtext_opaque');
    
    }, function(e) {
        $(this).find('.redtext').removeClass('redtext_opaque');
        $('.red-block').attr('src', 'img/index/swag.png');

    });

    $(window).scroll(function() {
        if($(document).scrollTop() > 107) {
            $('#header').slideUp();
        }
        else {
            $('#header').show();
            $('#header2').show();
        }
    });

        
});