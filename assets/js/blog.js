$(document).ready(function() {
    // var MQL = 1170;
    var MQL = 768;
    // var windowWidth = $(window).width();

    var headerHeight = $('header').height();
    // console.log('headerHeight = ' + headerHeight);

    

    if ($(window).width() > MQL) {
        var navbarHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
            previousTop: 0
        }, 
        function() {
            var currentTop = $(window).scrollTop();

            // console.log('previousTop', this.previousTop);
            // console.log('currentTop', currentTop);

            if(currentTop < this.previousTop) {
                //向上滚动
                //显示顶部导航条
                if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                    $('.navbar-custom').addClass('is-visible');
                } else {
                    //滚动到顶部
                    $('.navbar-custom').removeClass('is-visible is-fixed');
                }

                //显示返回顶部按钮
                if (currentTop < headerHeight && $('#goTop').hasClass('show')) {
                    //返回顶部按钮消失
                    $('#goTop').removeClass('show');
                }
            } else {
                //向下滚动
                $('.navbar-custom').removeClass('is-visible');
                if (currentTop > navbarHeight && !$('.navbar-custom').hasClass('is-fixed')) {
                    $('.navbar-custom').addClass('is-fixed');
                }

                if(currentTop > headerHeight && !$('#goTop').hasClass('show')) {
                    //返回顶部按钮显示
                    $('#goTop').addClass('show');
                    
                    
                }
            }

            this.previousTop = currentTop;
        });
    }

    //点击滚动到顶部
    var isScrolling = false;
    $("#goTop").click(function(){
        //判断是否正在滚动
        if(isScrolling) return;
        isScrolling = true;
        $("html,body").animate({scrollTop: 0}, 600, function(){
            isScrolling = false;
        });
    });
});

