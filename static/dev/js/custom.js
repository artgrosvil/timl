$(document).ready(function () {
    $("#header_havigation li a").each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location === link) {
            $(this).parent("li").addClass("active");
        }
    });
});