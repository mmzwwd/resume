var H = 0;

// $('.button').bind('mousedown touchstart',function(e) {
//   $('.clicked').removeClass('clicked');
//   $(this).addClass('clicked');
// });

$(document).bind('mousemove touchmove', function (e) {
    e.preventDefault();
    var drawSize = 1;
    var drawType = '💨';
    // ✭
    var floatType = 'floatOne';
    var xPos = e.originalEvent.pageX;
    var yPos = e.originalEvent.pageY;
    $('body').append('<div class="draw" style="font-size:' + drawSize + 'px;left:' + xPos + 'px;top:' + yPos + 'px;-webkit-animation:' + floatType + ' .9s 1;-moz-animation:' + floatType + ' .9s 1;color:#FFFF00;">' + drawType + '</div>');
    $('.draw').each(function () {
        var div = $(this);
        setTimeout(function () { $(div).remove(); }, 800);
    });
});
