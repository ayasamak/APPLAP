$(".nav-item .nav-link").click(function(){
$(this).addClass("active").parent().siblings().children().removeClass("active");
var x= $($(this).data("class")).offset().top;
$(window).scrollTop(x);
});
