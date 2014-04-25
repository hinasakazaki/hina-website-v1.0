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

    $('#hina-img').hover(function(){
        $('#hina-img').attr('src', 'img/hina.gif');
        $('#hina-img').attr('height', '300');
        $('#hina-img').attr('width', '230');
        $('#hina-img').text("SWAG!");
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