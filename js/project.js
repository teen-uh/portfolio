$(function() {
  
  var x = $(window).height() - $(window).width()*0.02;
  var midLineHeight =  ($(window).width()*0.01) + $("#content-head").height();
  
  if (window.matchMedia('(max-width: 600px)').matches){
      //phones
      var vw = 96;
      var x = $(window).height()*0.89;
      var midLineHeight =  ($(window).height()*0.1) + $("#content-head").height();
  }  else if (window.matchMedia('(max-width: 1200px)').matches && window.matchMedia('(min-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches){
      //vertical tablet
      var vw = 69;
  }  else if (window.matchMedia('(max-width: 992px)').matches && window.matchMedia('(min-width: 768px)').matches){
      //landscape tablet
     var vw = 74; 
  } else if (window.matchMedia('(min-width: 992px)').matches){
    //laptop and monitor
    var vw = 84; 
  } 
  
  // if (window.matchMedia('(min-width: 992px)').matches){
  //   //laptop and monitor
  //   var vw = 84; 
  // } else if (window.matchMedia('(max-width: 1200px)').matches && window.matchMedia('(min-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches){
  //     //vertical tablet
  //     var vw = 69;
  // } else if (window.matchMedia('(max-width: 992px)').matches && window.matchMedia('(min-width: 768px)').matches){
  //     //landscape tablet
  //    var vw = 74;
  // } else if (window.matchMedia('(max-width: 600px)').matches){
  //     //phones
  //     var vw = 98;
  //     var x = $(window).height()*0.91 + 4;
  //     var midLineHeight =  ($(window).height()*0.08) + $("#content-head").height();
  // }
  
  var boxHeight = $(window).height() - ($(window).width()*0.02);
  $("#project-box").css("height", boxHeight + "px");
  
  var contentHeight =  $("#project-box").height() - $("#content-head").height();
  $("#content").css("height", contentHeight + "px");

  var ifr = contentHeight - ($(window).width()*0.08);

  $("iframe").css("height", ifr  + "px");
  $("iframe").css("width", (ifr/9)*16  + "px");

  $("#middlebar").css("top", midLineHeight + "px");
  
  
    $(".border, #content-head, #content").hide();
  //   $("#content-head").hide();
  // $("#content-head").hide();
    $("#topbar").delay(1300);
    $("#topbar").show();
    $("#topbar").animate({width: vw + "vw"},600, function() {
      $("#rightbar").show();
      $("#rightbar").animate({height: x + "px"},700, function() {
        $("#bottombar").show();
        $("#bottombar").animate({width: vw + "vw"},800, function() {
          $("#leftbar").show();
          $("#leftbar").animate({height: x + "px"},900, function() {
            $("#content-head").fadeIn(1300);
            $("#content").fadeIn(1300);
            $("#middlebar").show();
            $("#middlebar").animate({width: vw + "vw"},1000, function() {
            });
          });
        });
      });
    });
  

  
  // console.log($(document).height());
  // console.log($(document).width());
  // console.log($(document).height()*0.97);
  

});








      
