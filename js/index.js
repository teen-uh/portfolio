$.fn.homeSlide = function(){
  
    var doc = $(document).width();
    var that = $(".home-a").width();

    if (window.matchMedia("(min-width: 992px)").matches) {
      $(".home-a").each(function () {
        //loop through each element with the .dynamic-height class
        $(this).css({
          top: $(document).height() * 0.48 - $(this).height() / 2 + "px",
          left: $(document).width() * 0.425 - $(this).width() / 2 + "px", //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
      });

      $(".home-p").each(function () {
        //loop through each element with the .dynamic-height class
        $(this).css({
          top: $(document).height() * 0.53 - $(this).height() / 2 + "px",
          left: $(document).width() * 0.425 - $(this).width() / 2 + "px", //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
      });
    } else if (
      window.matchMedia("(max-width: 992px)").matches &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      $(".home-a").each(function () {
        //loop through each element with the .dynamic-height class
        $(this).css({
          top: $(document).height() * 0.48 - $(this).height() / 2 + "px",
          left: $(document).width() * 0.375 - $(this).width() / 2 + "px", //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
      });

      $(".home-p").each(function () {
        //loop through each element with the .dynamic-height class
        $(this).css({
          top: $(document).height() * 0.52 - $(this).height() / 2 + "px",
          left: $(document).width() * 0.375 - $(this).width() / 2 + "px", //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
      });
    } else if (
      window.matchMedia("(max-width: 1200px)").matches &&
      window.matchMedia("(min-width: 600px)").matches &&
      window.matchMedia("(orientation: portrait)").matches
    ) {
      $(".home-a").each(function () {
        //loop through each element with the .dynamic-height class
        $(this).css({
          top: $(document).height() * 0.5 - $(this).height() / 2 + "px",
          left: $(document).width() * 0.35 - $(this).width() / 2 + "px", //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
      });

      $(".home-p").each(function () {
        //loop through each element with the .dynamic-height class
        $(this).css({
          top: $(document).height() * 0.50 - $(this).height() / 2 + "px",
          left: $(document).width() * 0.35 - $(this).width() / 2 + "px", //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
      });
    } else if (window.matchMedia("(max-width: 600px)").matches) {
      $(".home-a").each(function () {
        //loop through each element with the .dynamic-height class
        $(this).css({
          "margin-top":
            $(document).height() * 0.43 - $(this).height() / 2 + "px",
          left: $(document).width() * 0.5 - $(this).width() / 2 + "px", //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
      });

      $(".home-p").each(function () {
        //loop through each element with the .dynamic-height class
        $(this).css({
          top: $(document).height() * 0.48 - $(this).height() / 2 + "px",
          left: $(document).width() * 0.5 - $(this).width() / 2 + "px", //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
      });
    }

    console.log(doc);
    console.log(that);
}

$(window).resize(function() {
 $.fn.homeSlide();
});

$("document").ready(function() {
    $.fn.homeSlide();
});