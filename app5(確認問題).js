$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000ff',
      'height': '100px'
    });
    $('.box1').slideUp();
  });
});

// }).slideUP();と省略も可能