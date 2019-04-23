
function showmenu(){
    var display = document.getElementById('menu_show').style.display;
    if (display == 'none')
        display = 'block';
    else
        display = 'none';
}

document.getElementById('menu').addEventListener("click", function(){
    var display = document.getElementById('menu_show').style.display;
    if (display == 'none' || display == ""){
        document.getElementById('menu_show').style.display = "block";
    } else {
        document.getElementById('menu_show').style.display = "none";
    }
});

document.getElementById('logo').addEventListener("click", function(){
    var win = window.open("https://voices.uchicago.edu/ucpsi3/basic-page/", '_blank');
    win.focus();
});

var drone_video = document.getElementById("drone-video");

$(document).ready( function() {
    var offsets = document.getElementById('footer').getBoundingClientRect();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            drone_video.style.filter = "blur(2px)";
            document.getElementById("scroll").style.display = "none";
            document.getElementById("learn_more").style.color = "#10a4b7";
            document.getElementById("learn_more").style.boxShadow = "3px 3px 3px #D3D3D3"
            document.getElementById("learn_more").style.backgroundColor = "white";
            $("#learn_more").addClass("fixed-top");
        }else{
            drone_video.style.filter = "none";
            document.getElementById("learn_more").style.color = "white";
            document.getElementById("learn_more").style.boxShadow = "";
            document.getElementById("learn_more").style.backgroundColor = "transparent";


        }
    });
});

console.clear();
