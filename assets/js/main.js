$(document).ready(function(){
  /** cambia de imágenes **/
  $("input[type='radio']").click(function(){
    changeImg($(this).val());
  });

  /** cambio de imágenes por control siguiente **/
  var index = 1;
  $(".next").click(function() {
    index++;
    if(index == 6){index = 1; }
    changeImg(index);
  });

  /** cambio de imágenes por control antes **/
  $(".prev").click(function() {
    index--;
    if(index == 0){index = 5; }
    changeImg(index);
  });

  function changeImg(index){
    $("img").attr("src","assets/img/img"+index+".jpg");
    $("input[value="+index+"]").prop("checked","checked");
  }

  function changeImgAuto(){
    index++;
    if(index == 6){index = 1; }
    $("img").attr("src","assets/img/img"+index+".jpg");
    $("input[value="+index+"]").prop("checked","checked");

  }

  setTimeout(changeImgAuto(), 2000);
});
