$(function() {


    $('.tabs-wrapper').each(function() {
        let ths = $(this);
        ths.find('.arrivals__list').not(':first').hide();
        ths.find('.tab').click(function() {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.arrivals__list').hide().eq($(this).index()).fadeIn(700, "linear")
        }).eq(0).addClass('active');
    });

    $(function() {

        $(".header__burger").click(function() {
            $('.rightside-menu').toggleClass('menu-up');
        });
    });
    $(function() {

        $(".header__burger-menu").click(function() {
            $('.rightside-menu').toggleClass('menu-up');
        });
    });

})