$(document).ready(function () {
    $('.nav_link').click(function (element) {
        var scrollTo=$(this).attr('href');
        console.log(scrollTo)
        $('html,body').animate({
            scrollTop: $(scrollTo).offset().top
        },1500)
        
        if (!$(element.target).hasClass('nav_link__active')) {
            $(".nav_item").each(function (index, element) {
                console.log(index, element, this)
                $(element).find(".nav_link__active").removeClass('nav_link__active')
            })
            $(element.target).addClass('nav_link__active');
        }
    })
})   