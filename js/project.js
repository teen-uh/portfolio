$(function() {
  
  var x = $(window).height() - $(window).width()*0.02;
  const contentHead = document.getElementById("content-head");

  var ifr2 = ($(window).width()*0.92);
  console.log(ifr + "ifr");

  var midLineHeight;
  var boxHeight = $(window).height() - ($(window).width()*0.02);



  
  if (window.matchMedia('(max-width: 600px)').matches){
      //phones
      var vw = 96;
      var x = $(window).height()*0.89;
      var contentHeight =  $("#project-box").height() - contentHead.clientHeight;
      midLineHeight =  ($(window).height()*0.13) + $(".project-header").height();
      $("#project-box").css("height", boxHeight - ($(window).height()*0.1) + "px");
      $("iframe").css("width", ifr2  + "px");
       $("iframe").css("height", (ifr2/16)*9  + "px");
       $("#content").css("height", contentHeight + "px");
  }  else if (window.matchMedia('(max-width: 1200px)').matches && window.matchMedia('(min-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches){
      //vertical tablet
      var vw = 69;
      midLineHeight =  ($(window).width()*0.01) + $("#content-head").height();
      $("#project-box").css("height", boxHeight + "px");
      ("iframe").css("width", ifr2  + "px");
       $("iframe").css("height", (ifr2/16)*9  + "px");
  }  else if (window.matchMedia('(max-width: 992px)').matches && window.matchMedia('(min-width: 768px)').matches){
      //landscape tablet
     var vw = 74; 
     midLineHeight =  ($(window).width()*0.01) + contentHead.clientHeight;
     $("#project-box").css("height", boxHeight + "px");
     var contentHeight =  $("#project-box").height() - contentHead.clientHeight;
     var ifr = contentHeight - ($(window).width()*0.08);
     $("iframe").css("height", ifr  + "px");
     $("iframe").css("width", (ifr/9)*16  + "px");
  } else if (window.matchMedia('(min-width: 992px)').matches){
    //laptop and monitor
    var vw = 84; 
    midLineHeight =  ($(window).width()*0.01) + $("#content-head").height();
    $("#project-box").css("height", boxHeight + "px");
    var contentHeight =  $("#project-box").height() - contentHead.clientHeight;
    var ifr = contentHeight - ($(window).width()*0.08);
    $("iframe").css("height", ifr  + "px");
    $("iframe").css("width", (ifr/9)*16  + "px");
  } 
  
  var contentHeight =  $("#project-box").height() - contentHead.clientHeight;
  $("#content").css("height", contentHeight + "px");
  console.log($("#project-box").height(), contentHead.clientHeight, $("#content").height())

  if (window.matchMedia('(min-width: 992px)').matches){
    //laptop and monitor
    // $("iframe").css("margin-top", (contentHeight - $("iframe").height())/2  + "px");
  } else if (window.matchMedia('(max-width: 1200px)').matches && window.matchMedia('(min-width: 600px)').matches && window.matchMedia('(orientation: portrait)').matches){
      //vertical tablet

  } else if (window.matchMedia('(max-width: 992px)').matches && window.matchMedia('(min-width: 768px)').matches){
      //landscape tablet

  } else if (window.matchMedia('(max-width: 600px)').matches){
      //phones
      $("iframe").css("margin-top", (contentHeight - $("iframe").height())/2  + "px");
  }

  // $("iframe").css("margin-top", (contentHeight - $("iframe").height())/2  + "px");
  
  console.log($("iframe").height(), contentHeight);

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








      
