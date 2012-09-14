function resize_body() {
    $("#body").css({
      height: ($(window).height()-(100+$('#menu').height())-(50+$('#footer').height()+20))+'px'
    });
}

$(document).ready(function() {
    $(window).resize(resize_body);
    if ( $.browser.msie ) {
        $("#welcome").html("<p>Please, for your own mental sanity install <a href='http://getfirefox.com'>Firefox</a></p>")
    }

    $("#welcome p").hide();
    $("#welcome p").fadeIn("slow");
    $('#welcome').delay(3500).fadeOut('slow');

    resize_body();

    if (!window.location.hash) {
        $.History.go("home");
    }

    $.History.bind(function(state){
        $(".page").hide();
        $("#"+state).show();
    });
});
