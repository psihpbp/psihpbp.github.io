
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

document.getElementById('contact').addEventListener("click", function(){
    console.log("click");
    // window.open('mailto:psihpbp@gmail.com?subject=Interested&body=body');
});


var drone_video = document.getElementById("drone-video");

$(document).ready( function() {

    // requestAnimationFrame(start);
    // if (isMobile == false){
    var offsets = document.getElementById('footer').getBoundingClientRect();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            drone_video.style.filter = "blur(2px)";
            document.getElementById("scroll").style.display = "none";
            document.getElementById("learn_more").style.color = "#26272d";
            document.getElementById("learn_more").style.boxShadow = "3px 3px 3px #D3D3D3"
            document.getElementById("learn_more").style.backgroundColor = "white";
            $("#learn_more").addClass("fixed-top");

            // if ($(window).scrollTop() > offsets.top - 50){
            //     $("#learn_more").removeClass("fixed-top");
            // }

        }else{
            drone_video.style.filter = "none";
            document.getElementById("learn_more").style.color = "white";
            document.getElementById("learn_more").style.boxShadow = "";
            document.getElementById("learn_more").style.backgroundColor = "transparent";


        }
    });
});



// (function() {
//     var folded = new OriDomi('.psiofficial', {
//         vPanels: 6,
//         ripple: true,
//         speed: 1200,
//         shadingIntensity: 2,    // lessen the shading effect
//         perspective: 800
//     });
//
//     setTimeout(function () {
//         folded.accordion(50);
//     }, 1000);
// }).call(this);

