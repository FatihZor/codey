$("#theme_mode_switch").click(function(e){
    darkmode.toggleDarkMode();
    darkmodeicon();
});

$("document").ready(function(){
    darkmodeicon();
});

function darkmodeicon(params) {
    if(darkmode.inDarkMode){
        $("#dark_mode_icon").removeClass("bi-moon");
        $("#dark_mode_icon").addClass("bi-sun");
    }else{ 
        $("#dark_mode_icon").removeClass("bi-sun");
        $("#dark_mode_icon").addClass("bi-moon");
    }
}

 // alertbar later
 $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 280) {
        $('.page-next-prev').fadeIn();
    } else {
        $('.page-next-prev').fadeOut();
    }
});