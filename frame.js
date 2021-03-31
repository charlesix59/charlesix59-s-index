if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    //alert("手机端");
    window.location.href= "mobile.html";
} else {
    //alert("电脑端");
    //window.location.href= "index.html";
}