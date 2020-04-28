function getValue(x, y) {
    l = $('#container').offset().left;
    w = $('#container').width();
    $('#tbox').css('left', (l + w + x - 91) + 'px');
    $('#tbox').css('bottom', y + 'px');
};

function scrollTop() {
    h = $(window).height();
    t = $(document).scrollTop();
    if (t > h) {
        $('#gotop').fadeIn('slow');
    } else {
        $('#gotop').fadeOut('slow');
    }
};
$(document).ready(function (e) {
    getValue(10, 41);//#tbox的div距浏览器底部和页面内容区域右侧的距离
    scrollTop();
    $('#gotop').click(function () {
        $(document).scrollTop(0);
    })
});
$(window).resize(function () {
    getValue(10, 41);//#tbox的div距浏览器底部和页面内容区域右侧的距离
});

$(window).scroll(function (e) {
    scrollTop();
});
