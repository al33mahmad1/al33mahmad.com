(function ($) {
  "use strict";
  $("#preloader").delay(350).fadeOut("slow");
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: false,
    live: true,
  });
  wow.init();
  $(window).on("load", function () {
    if ($(".isotope_items").length) {
      var $container = $(".isotope_items");
      $container.isotope();
      $(".portfolio-filter ul li").on("click", function () {
        $(".portfolio-filter ul li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".isotope_items").isotope({
          filter: selector,
          animationOptions: { duration: 750, easing: "linear", queue: false },
        });
        return false;
      });
    }
  });
  $(window).on("scroll", function () {
    if ($(document).scrollTop() > 80) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });
  $(".popup-video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(".isotope_items").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find("img");
      },
    },
  });
  $(".testimonial").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    fade: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 700) {
      $("#backtotop").fadeIn(500);
    } else {
      $("#backtotop").fadeOut(500);
    }
  });
  $("#backtotop").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function(){
  $("#name").keyup((e) => {
    if(validateName($("#name").val())){
      $("#name").removeClass("text-danger")
    }else{
      $("#name").addClass("text-danger")
    }
  })

  $("#email").keyup((e) => {
    if(validateEmail($("#email").val())){
      $("#email").removeClass("text-danger")
    }else{
      $("#email").addClass("text-danger")
    }
  })

  $("#subject").keyup((e) => {
    if($("#subject").val().length !== 0 || $("#subject").val() !== ''){
      $("#subject").removeClass("text-danger")
    }else{
      $("#subject").addClass("text-danger")
    }
  })

  $("#message").keyup((e) => {
    if($("#message").val().length !== 0 || $("#message").val() !== ''){
      $("#message").removeClass("text-danger")
    }else{
      $("#message").addClass("text-danger")
    }
  })

  $("#submitButton").click(e => {
    
    e.preventDefault();
    if(!validateFields()){
      return
    }
    let data = {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      message: "Aleem's website " + $("#message").val()
    }
    $.ajax({
      type: 'POST',
      url: '../gigaheap/php/contact.php',
      data:data,
      success: function(response) {

        $("#success_alert").fadeIn("slow");
        $("#success_alert").removeClass("d-none");
        // $('#name').val('');
        // $('#email').val('');
        // $('#subject').val('');
        // $('#message').val('');
      }
    })
  })
})
function validateFields(){
  if(!validateName($("#name").val()) || !validateEmail($("#email").val())){
    return false;
  }
}
function validateName(name){
  if(!(/^[A-Za-z\s]+$/.test(name)) || name.length == 0 || name == "")
    return false;
  else
    return true;
  
}

function validateEmail(email){
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || email.length == 0 || email == "")
    return false;
  else
    return true;
}

