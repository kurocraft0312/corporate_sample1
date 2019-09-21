'use strict';

$(function(){
    // #で始まるアンカーをクリックしたとき
    $('a[href^="#"]').click(function() {
        //スクロール速度(ミリ秒)
        var speed = 400;
        //アンカーの値取得
        var href = $(this).attr("href");
        //移動先を取得
        var target = $(href === "#" || href === "" ? 'html' : href);
        //移動先を数値で取得
        var position = target.offset().top;
        //スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});