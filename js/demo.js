
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
        },
    //

});
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);


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
    //表单验证
    $('#submitall').click(function () {
        //姓名
        var strname=$('#userName').val();
        var retname=/^[\u4E00-\u9FA5]{2,4}$/;
        if (retname.test(strname)){
        }
        else{
            alert('请输入正确的姓名格式');
        }
        //邮箱
        var stremail1=$('#email1').val();
        var retemail1=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if (retemail1.test(stremail1)) {
        }
        else{
            alert('请输入正确的邮箱格式');
        }
    });

});
