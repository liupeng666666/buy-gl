var token;
$(function () {
    token = window.sessionStorage.getItem("token");
    public_left_modal();
})

function public_left_modal() {

    $.ajax({
        type: "post",
        url: "../buy/SysModal/SysModalSelect",
        async: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', token);
        },
        success: function (info) {
            var str = "     <li class=\"static\">团购管理系统</li>  ";
            if (info.code == 100) {
                for (var i in info.modal) {
                    var modal = info.modal[i];
                    if (modal.level == 1) {
                        var st = "<ul class=\"submenu\">";
                        var num = 0;
                        for (var j in info.modal) {
                            var mj = info.modal[j];
                            if (mj.parentmoduleid == modal.moduleid) {
                                st += "<li>";
                                st += "<a href=\"" + mj.url + "\">" + mj.modulename + "</a>";
                                st += " </li>";
                                num += 1;
                            }
                        }

                        str += " <li class=\"active\">";
                        str += " <a href=\"" + modal.url + "\" data-role=\"main\">";
                        if (num == 0) {
                            str += " <i class=\"fa fa-home icon-sidebar\"></i><i class=\"fa fa-angle-right icon-right\"></i>" + modal.modulename + "</a>";
                        } else {
                            str += " <i class=\"fa fa-home icon-sidebar\"></i><i class=\"fa fa-angle-right icon-right chevron-icon-sidebar\"></i>" + modal.modulename + "</a>";
                            str += st;
                        }

                        str += " </li> ";
                    }

                }
                $("#nickname").html(info.user.nickname);
            }
            $(".sidebar-menu").html(str);
        },
        error: function (err) {

        }
    });
}