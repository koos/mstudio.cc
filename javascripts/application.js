function goToByScroll(id){
  $('html,body').animate({scrollTop: $("."+id).offset().top},'slow');
}
$(function() {
  $('.slide') .css({'height': (($(window).height()) )});
  $('.content-frame') .css({'height': (($(window).height()) - 63)+'px'});
  $('.content-frame-fifth') .css({'height': (($(window).height()) - 63)+'px'});

  $(window).bind('resize', function(){
    $('.slide') .css({'height': (($(window).height()) )});
    $('.content-frame') .css({'height': (($(window).height()) - 63)+'px'});
    $('.content-frame-fifth') .css({'height': (($(window).height()) - 63)+'px'});
  });
});

function relocateV() {
  var h = $(window).height();
  var w = $(window).width();

  if (h > 550) {
    $("#menu").css("top", (h / 2 - 280 / 2 + 90 / 2) + 'px');
    $("div.content-frame").css("padding-top", ((h - 450) / 2 + 35) + 'px');
  }
  $("#menu").css("left", (w / 2 - 400 - 20 - 150) + 'px');
}

$('document').ready(function(){
  Cufon.replace('div#menu');

  jQuery.event.add(window, "load", relocateV);
  jQuery.event.add(window, "resize", relocateV);
});
