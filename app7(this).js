// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// })

// ↑一つずつ記述するやり方。面倒
// thisを使って書き換える
// this=クリックされた要素

$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});