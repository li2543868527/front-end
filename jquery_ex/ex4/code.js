$(function () {

    $(".sample_btn").click(function () {

        $.ajax({
            url: 'test.html',
            type: 'GET',
            dataType: 'html'

        }).done(function (data) {

            //通信成功の場合
            $(".result").html(data);

        }).fail(function(){

            //通信失敗の場合
            console.log("通信失敗");

        });
    });

});