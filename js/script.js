$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// ////////////////////
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".navigation").addClass("fixd-manu")
    } else {
      $(".navigation").removeClass("fixd-manu")
    }
  
  })
  