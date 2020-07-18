let btn = [0, 0, 0, 0];
if ($(window).width() > 768) {
    $("#jspanel").removeClass("col-4");
    $("#csspanel").removeClass("col-4");
    $("#htmlpanel").removeClass("col-4");

}
if ($(window).width() <= 768) {
    $("#jspanel").addClass("col-4");
    $("#csspanel").addClass("col-4");
    $("#htmlpanel").addClass("col-4");
}

function widthchange() {
    var num = 0;
    for (var i = 0; i < btn.length; i++) {
        if (btn[i] % 2 != 0) {
            num++;
        }
    }
    if (num == 1) {
        $(".col-md-3").css({
            flex: "0 0 33.3%",
            maxWidth: "33.3%"
        })
    }
    if (num == 2) {
        $(".col-md-3").css({
            flex: "0 0 50%",
            maxWidth: "50%"
        })
    }
    if (num == 3) {
        $(".col-md-3").css({
            flex: "0 0 100%",
            maxWidth: "100%"
        })
    }
    if (num == 0) {
        $(".col-md-3").css({
            flex: "0 0 25%",
            maxWidth: "25%"
        })
    }
}

function widthchange1() {
    var num = 0;
    for (var i = 0; i < 3; i++) {
        if (btn[i] % 2 != 0) {
            num++;
        }
    }
    if (num == 1) {
        $(".col-4").css({
            flex: "0 0 50%",
            maxWidth: "50%"
        })
    }
    if (num == 2) {
        $(".col-4").css({
            flex: "0 0 100%",
            maxWidth: "100%"
        })
    }
    if (num == 0) {
        $(".col-4").css({
            flex: "0 0 33.3%",
            maxWidth: "33.3%"
        })
    }
}

function putOutput() {
    let userhtml = $("#htmltextarea").val();
    let usercss = $("#csstextarea").val();
    $("iframe").contents().find("html").html("<!DOCTYPE html><html lang='en'><head></head><body>" + userhtml + "</body></html>");
    $("iframe").contents().find("head").append("<style></style>");
    $("iframe").contents().find("style").append(usercss);
}

function jsOutput() {
    let userjs = $("#jstextarea").val();
    document.getElementById("frame").contentWindow.eval(userjs);
}
$(".bottombutton").toggleClass("toggle");
if ($(window).width() > 576) {
    widthchange();
}
$("#htmlbtn").click(function() {
    $(this).toggleClass("toggle");
    $("#htmlpanel").toggle();
    btn[0]++;
    if ($(window).width() > 576) {
        widthchange();
    } else {
        widthchange1();
    }
});
$("#cssbtn").click(function() {
    $(this).toggleClass("toggle");
    $("#csspanel").toggle();
    btn[1]++;
    if ($(window).width() > 576) {
        widthchange();
    } else {
        widthchange1();
    }

});
$("#jsbtn").click(function() {
    $(this).toggleClass("toggle");
    $("#jspanel").toggle();
    btn[2]++;
    if ($(window).width() > 576) {
        widthchange();
    } else {
        widthchange1();
    }

});

$("#outputbtn").click(function() {
    $(this).toggleClass("toggle");
    $("#outputpanel").toggle();
    btn[3]++;
    if ($(window).width() > 576) {
        widthchange();
    } else {
        widthchange1();
    }

});

putOutput();
jsOutput();
$("textarea").on("change keyup paste", function() {
    putOutput();
    jsOutput();
});