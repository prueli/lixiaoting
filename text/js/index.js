function ajax() {
    $.ajax({
            url: "index.json",
            type: "get",
            success: function(data) {
                getdetaillist(data);
                getailjson(data);
                getcomicslist(data);
                getrmanlist(data);
                getcomprehensivelist(data);
                getcomicslist2(data);
            }
        })
        //显示看漫画鼠标放上详情
    function getailjson(data) {
        for (var i = 0; i < data.detailjson.length; i++) {
            console.log(data.detailjson[i].img)
            var xian = $("<img src=" + data.detailjson[i].img + ">" +
                "<p><span class='details-name'>" + data.detailjson[i].name + "</span><span class='episode'>" + data.detailjson[i].episode + "</span></p>" +
                "<p class='volume'>" + data.detailjson[i].num + "</p>" + "<div class='all-episode'></div>")
            $(".tv-details").append(xian)
        }
        getdetaillist(data);
    }
    //显示看漫画的集数
    function getdetaillist(data) {
        for (var i = 0; i < data.detaillist.length; i++) {
            console.log(data.detaillist[i])
            var xian = $("<div><p>" + data.detaillist[i].ju + "</p>" +
                "<ul class='all-ul'><li>" + data.detaillist[i].num1 + "</li>" +
                "<li>" + data.detaillist[i].num2 + "</li>" +
                "<li>" + data.detaillist[i].num3 + "</li>" +
                "<li>" + data.detaillist[i].num4 + "</li>" +
                "<li>" + data.detaillist[i].num5 + "</li>" +
                "<li>" + data.detaillist[i].num6 + "</li></ul></div>");
            $(".all-episode").append(xian);
        }
    }

    //国漫json
    function getcomicslist(data) {
        for (var i = 0; i < data.comicslist.length; i++) {
            var xian = $("<li><span class='" + data.comicslist[i].css + "'>" + data.comicslist[i].num + "</span>" + data.comicslist[i].title +
                "<span class='subscript'><img src=" + data.comicslist[i].img + "></span></li>")
            $(".guoman-name").append(xian)
        }
    }
    //日漫json
    function getrmanlist(data) {
        for (var i = 0; i < data.rmanlist.length; i++) {
            var xian = $("<li><span class='" + data.rmanlist[i].css + "'>" + data.rmanlist[i].num + "</span>" + data.rmanlist[i].title +
                "<span class='subscript'><img src=" + data.rmanlist[i].img + "></span></li>")
            $(".rman-name").append(xian)
        }
    }
    //综合json
    function getcomprehensivelist(data) {
        for (var i = 0; i < data.comprehensivelist.length; i++) {
            var xian = $("<li><span class='" + data.comprehensivelist[i].css + "'>" + data.comprehensivelist[i].num + "</span>" + data.comprehensivelist[i].title +
                "<span class='subscript'><img src=" + data.comprehensivelist[i].img + "></span></li>")
            $(".comprehensive-name").append(xian)
        }
    }
    //国漫2json
    function getcomicslist2(data) {
        for (var i = 0; i < data.comicslist2.length; i++) {
            var xian = $("<li><span class='" + data.comicslist2[i].css + "'>" + data.comicslist2[i].num + "</span>" + data.comicslist2[i].title +
                "<span class='subscript'><img src=" + data.comicslist2[i].img + "></span></li>")
            $(".guoman2-name").append(xian)
        }
    }

    // 独家动画
    $(".anime-list-ul>li").mouseenter(function()  {    
        var  index  =  $(this).index();
        $(".anime-list-ul>li:eq(" + index + ")").children('.tv-details').css("display", "block")
    })
    $(".anime-list-ul>li").mouseleave(function()  {    
        var  index  =  $(this).index();
        $(".anime-list-ul>li:eq(" + index + ")").children('.tv-details').css("display", "none")
    })

    //国漫日漫综合type切换
    $('.comics>div:not(:first)').hide()
    $(".title>li").hover(function() {
        var index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active");
        console.log(index)
        $(".comics>div:eq(" + index + ")").show().siblings().hide();
    })
}
ajax();