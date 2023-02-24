$(document).ready(function () {
    $(".tab img").click(function () {
        $(this).parent(".accordion-item").find(".panel").fadeToggle('slow');
        $(this).parent(".accordion-item").prevAll(".accordion-item").find(".panel").fadeOut('slow');
        $(this).parent(".accordion-item").nextAll(".accordion-item").find(".panel").fadeOut('slow');
        $('.tab img').removeClass("on");
        $(this).addClass("on");
        $('.panel').removeClass("active");
        $(this).addClass("active");
    });
})