/*!
 * default v1.0.0 
 * Copyright 2015 quanfon.
*/

$(function () {

    /** SIDEBAR FUNCTION **/
    $('.sidebar-left').on("click", "ul.sidebar-menu li a", function () {
        "use strict";
        $('.sidebar-left li').removeClass('active');
        $(this).closest('li').addClass('active');
        var checkElement = $(this).next();
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('fast');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.sidebar-left ul.sidebar-menu ul:visible').slideUp('fast');
            checkElement.slideDown('fast');
        }
        if ($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });

    //show active menu highlight	 
    $(".sidebar-left ul.sidebar-menu li a").each(function () {
        $this = $(this);
        var subRole = $this.attr("data-role");
        var pagesubRole = $("body").attr("role");

        if (pagesubRole.indexOf(subRole) != -1) {
            $this.parent().parent().parent().siblings().removeClass('active');
            $this.parent().parent().parent().addClass('active');
            $this.parent().parent().show();
            $this.parent().siblings().removeClass("active");
            $this.parent().addClass("active");
        }

    });

    /** END SIDEBAR FUNCTION **/

    $(window).on("load resize", function () {
        if ($(this).width() < 1000) {
            $(".sidebar-left").toggleClass("toggle");
            $(".page-content").toggleClass("toggle");
        } else {
            $(".sidebar-left").removeClass("toggle");
            $(".page-content").removeClass("toggle");
        }


    });

    /** BUTTON TOGGLE FUNCTION **/
    $(".open-left").click(function (e) {
        e.stopPropagation();
        $(".sidebar-left").toggleClass("toggle");
        $(".page-content").toggleClass("toggle");

    });
    /** END BUTTON TOGGLE FUNCTION **/

    /* container-fluid min-height*/
    var window_height = $(window).height();
    var iframe_height = (window_height - 150) + "px"; //container-fluid最小高度
    $(".container-fluid").css("min-height", iframe_height);

    /** NICESCROLL AND SLIMSCROLL FUNCTION **/
    $(".sidebar-nicescroller").niceScroll({
        cursorcolor: "#121212",
        cursorborder: "2px solid #333",
        cursorborderradius: "0px",
        cursorwidth: "0px"
    });
    $(".sidebar-nicescroller").getNiceScroll().resize();


});


//	隐藏显示

function showMovePop(dd, moveWidth) {//要显示的图层以及宽度
    $(dd).fadeIn();
    var moveDiv = dd + " " + ".pop-inner";
    //alert(moveDiv);
    tipsWindown(moveDiv, moveWidth); //可拖动图层
}

function showPop(dd) {//要显示的图层以及宽度
    //"use strict";
    $(dd).fadeIn();
    //$("body").addClass("modal-open");
}


function hidePop(dd) {
    //"use strict";
    $(dd).fadeOut();
    //$("body").removeClass("modal-open");	
}

function togglePop(dd) {//要显示的图层以及宽度
    //"use strict";
    $(dd).toggle();
}


function hideModal(div) {
    $(div).modal('hide');
    //$("#editCategory").modal('show');
}

