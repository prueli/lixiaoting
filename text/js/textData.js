function ajax() {
    //显示看漫画鼠标放上详情
    function getailjson() {
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
}
ajax();