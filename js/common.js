$(function(){

    /* Main */
    var pageSlider = $("#introduction").royalSlider({
        navigateByClick     : false
    }).data('royalSlider');


    $(document).on('click touchstart', '.option', function(e){
        e.preventDefault();
        $('.option').removeClass('active');
        $(this).addClass('active');
    });

});

