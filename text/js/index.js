function ajax() {
    $.ajax({
            url: "index.json",
            type: "get",
            success: function(data) {
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
                "<p class='volume'>" + data.detailjson[i].num + "</p>" + "<p>" + data.detailjson[i].ju + "</p><ul class='all-ul'></ul>")
            $(".tv-details:eq(" + i + ")").append(xian)
            if (data.detailjson[i].number1.length != 11) {
                console.log("哈哈哈哈" + data.detailjson[i].number1.length)
                for (var j = data.detailjson[i].number1[0]; j > data.detailjson[i].number1[0] - 10; j--) {
                    // console.log('123123111---'+j)
                    var xian2 = $("<li>" + j + "</li>")
                    $(".all-ul:eq(" + i + ")").append(xian2)
                }
            } else {
                for (var j = data.detailjson[i].number1[0]; j > data.detailjson[i].number1[0]; j--) {
                    // console.log('123123111---'+j)
                    var xian2 = $("<li>" + j + "</li>")
                    $(".all-ul:eq(" + i + ")").append(xian2)
                }
            }
            if (data.detailjson[i].number1.length != 12) {
                $(".all-ul:eq(" + i + ")").append("<li> . . . </li>")
                $(".all-ul:eq(" + i + ")").append("<li>1</li>")
            }

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