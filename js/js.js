
$(function () {
    $('#dowebok').fullpage({
        //每一屏的颜色
        sectionsColor: ['rgba(11,94,165,0.8)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(255,255,255,1)','rgba(255,255,255,1)'],
        afterLoad: function (link,index) {
            //index  当前section编号
            //current类加给谁，谁就做动画
            $('.section').removeClass('current');
            //让动画延迟执行100ms
            setTimeout(function () {
                $('.section').eq(index-1).addClass('current');
            },100);
        }

    });

    //three icon鼠标hover事件
    $('.three-icon-left a').hover(function () {
        $(this).fadeTo('fast',0.5)
    },function () {
        $(this).fadeTo('fast',1)
    });
    $('.three-icon-right a').hover(function () {
        $(this).fadeTo('fast',0.5)
    },function () {
        $(this).fadeTo('fast',1)
    });

    $('.three-icon-bottom ul li').hover(function () {
        $(this).fadeTo('fast',0.5)
    },function () {
        $(this).fadeTo('fast',1)
    })

});
