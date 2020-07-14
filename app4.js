$(document).ready(function () {
  $('body').html('<h1>Hello jQuery!!</h1>');
});

// jQueryを使うには、HTMLと紐づけする必要がある
// HTMLの読み込みが終わってからjQueryが実行されるように、

// $(document).ready(function () {
//   jQueryプログラムの内容
// });

// と記述する。↑を↓のように省略可能

// $(function(){
//   jQueryプログラムの内容
// });


// jQueryプログラムの書き方
// $(セレクタ).メソッド(パラメータ);