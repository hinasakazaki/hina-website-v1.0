$(document).ready(function() {

    // $('#key').click(function() {
    //     $('#secret').show();
    // });
    // $('#secret').click(function() {
    //     $('#secret').hide());
    // });
    
    // $('#append').click(function() { 
    //     $('#append').append("Hi this is more")
    // });

    // $(window).scroll(function(){
    //      $(‘#header’).css(‘background’, ‘#d4c5d4’).fadeOut(500).fadeIn(500); 
    // });

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