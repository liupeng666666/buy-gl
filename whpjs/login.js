$(function () {

})

function login() {
    var username = $("#username").val();
    var password = $("#password").val();
    var yzm = $("#yzm").val();
    if (username == null || username == "") {
        $(".notifyError").html("请输入用户名");
        $(".notifyError").show();
        return false;

    }
    if (password == null || password == "") {
        $(".notifyError").html("请输入密码");
        $(".notifyError").show();
        return false;
    }
    if (yzm == null || yzm == "") {
        $(".notifyError").html("请输入验证码");
        $(".notifyError").show();
        return false;
    }
    $(".notifyError").hide();
    $.ajax({
        type: "post",
        url: "../buy/Auth/Login",
        async: true,
        data: {
            username: username,
            password: password,
            yzm: yzm
        },
        dataType: "JSON",
        success: function (info) {
            if (info.code == 100) {
                window.sessionStorage.setItem("token", info.token);
                if (info.modal != null && info.modal != "" && info.modal.url != null) {
                    window.location.href = info.modal.url;
                } else {
                    $(".notifyError").html("暂无权限");
                    $(".notifyError").show();
                }

            } else if (info.code == 101) {
                $(".notifyError").html("用户名或密码不能为空");
                $(".notifyError").show();
            } else if (info.code == 102) {
                $(".notifyError").html("用户名或密码不正确");
                $(".notifyError").show();
            } else if (info.code == 103) {
                $(".notifyError").html("服务器异常，请联系客服");
                $(".notifyError").show();
            } else if (info.code == 104) {
                $(".notifyError").html("验证码错误，请重新输入");
                $(".notifyError").show();
            } else {
                $(".notifyError").html("服务器异常，请联系客服");
                $(".notifyError").show();
            }
        },
        error: function (err) {
        }
    });
}