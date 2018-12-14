
/* global $ */

/* @param index クリックしたメニューのidのセレクタ */
function showTab(index) {
  console.log('index : ' + index);
  $('.tabs-menu div').removeClass('active').eq(index).addClass('active');
  $('.tabs-content > div').hide().eq(index).show();
}

$(document).ready(function() {
  // DOMの読み込みが完了したタイミング
  
  // 初期化
  showTab(0);
  
  $('.tabs-menu div').click(function() {
    var index = $('.tabs-menu div').index(this);
    showTab(index);
    return false;
  });
});

window.onload = function() {
  // ページ内のすべての外部CSSや画像の読み込みが完了したタイミング
};

