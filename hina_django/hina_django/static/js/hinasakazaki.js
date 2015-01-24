$(document).ready(function() {

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