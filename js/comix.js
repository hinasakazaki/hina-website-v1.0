$(document).ready(function() {

    currPage= 2;
    mostRecentPage = 2;
    
    function getPrev(currPage) {
        return currPage-1; 
    });

    function getNext(currPage) {
        if (currPage = mostRecentPage) {
            $('#prev').hide();
        }
        else {        
            return currPage+1;
        }
    });

    function getRandom(currPage) {
        return (currPage/2);
    });

    $('.button').click(function() {
        alert("Your book is overdue");
       //$('#frame').find('img').attr('src', 'img/comix/' + getPrev(currPage) +'.png');
    });

    $('#random').click(function() {
        $('#frame').find('img').attr('src', 'img/comix/' + getRandom(currPage) +'.png');
    });

    $('#next').click(function() {
        $('#frame').find('img').attr('src', 'img/comix/' + getNext(currPage) +'.png');
    });


    /* Defaults */
    $('#frame:first').addClass('active');
    $('#frame').find('img').attr('src', 'img/comix/' + currPage + '.png');

});