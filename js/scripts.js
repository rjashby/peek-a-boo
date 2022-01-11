$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").fadeOut();
    
    $("button#light").click(function() {
      $("body").removeClass();
      $("body").addClass("light-background");
    });
  
    $("button#dark").click(function() {
      $("body").removeClass();
      $("body").addClass("dark-background");
    });
  });
});