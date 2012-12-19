$(document).ready(function() {
  $.anystretch("img/monkey.jpg");

  if (!window.location.hash || window.location.hash === "#") {
    $.History.go("home");
  }

  $.History.bind(function(state){
    state = state || "home";
    $(".page").hide();
    $("#page_"+state).show();
    $(".nav > li").removeClass("active");
    $("#"+state+"_link").addClass("active");
    $(window).scrollTop(0);
  });
});
