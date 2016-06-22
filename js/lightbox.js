$(document).ready(function(){
  $(".lightBox img").on("click", function(){
    $(".backDrop").animate({"opacity": ".70"}, 500);
    $(".box").animate({"opacity": "1.0"}, 500);
    $(".backDrop, .box").css("display", "block");
  });
  
  $(".thumb").on("click", function(){
    var largeImage = $(this).attr("src");
    $(".largeImage").attr({src: largeImage});
  });
  
  $(".close, .backDrop").on("click", function(){
    closeBox();
  });

  function closeBox(){
    $(".backDrop, .box").animate({"opacity": "0"}, 500, function(){
    $(".backDrop, .box").css("display", "none");
    });
  }
});