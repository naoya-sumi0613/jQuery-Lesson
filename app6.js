// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   });
// });

// ↑だとその都度CSSを記述するため手間になる
// イベント検出後のCSSをあらかじめ定義し、addClassするようにする

$(function(){
//$('.box1').mouseover(function(){
//クリックイベントに変更
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});

// addClass,removeClassには.をつけない。