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

    $(document).on('click', '.link', function(e){
        e.preventDefault();
        var $this = $(this);
        $('body').addClass('loading');
        $('main').load('includes/' + $this.attr('href') + '.html', function(){
            $('body').removeClass('loading');
        });
    });

});

