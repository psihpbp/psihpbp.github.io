/* Animation for typewriter effect on the homepage */

var wordbank = ["Greener", "Renewable", "Brighter", "Cleaner", "Sustainable", "Better"];
var wlength = wordbank.length;

var videotext = document.getElementById("video-text");
var round = 0;
var count = 0;
var word = wordbank[count];
var display = word;

videotext.innerHTML = "Building a " + word + " Future";

var autopager;
var innerLoop;


function start(){
    autopager = setInterval(function() {
        round = 0;
        var copyIndex = -1;

        innerLoop = setInterval(function() {
            if (round == 0){
                display = display.slice(0, -1);
            }
            if (round == 1){
                copyIndex += 1;
                display = word.slice(0, copyIndex);
            }
            if (copyIndex == word.length){
                clearInterval(innerLoop);
            }
            videotext.innerHTML = "Building a " + display + " Future";
            if (display.length == 0){
                copyIndex = 0;
                count += 1;
                word = wordbank[(count) % wlength];
                round = 1;
            }
        }, 75);
    }, 3000);
}

$(window).focus(function() {
    if (!autopager)
        start();
});

$(window).blur(function() {
    window.clearInterval(autopager);
    autopager = 0;
});


var drone_video = document.getElementById("drone-video");

$(document).ready( function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $("#bottomnav").hide();
            drone_video.style.filter = "blur(4px)";

            if ($(window).scrollTop() > 400) {
                if ($(window).scrollTop() > 684) {
                    $("#learn_more").addClass("fixed-top");
                    document.getElementById("learn_more").style.marginBottom = "0";
                }else{
                    $("#learn_more").removeClass("fixed-top");
                    document.getElementById("learn_more").style.marginBottom = "-2vh";
                }
                $("#bottomnav").hide();
            }else{
                $("#learn_more").removeClass("fixed-top");
            }

        }else{
            $("#bottomnav").show();
            drone_video.style.filter = "none";
        }

    });
});


(function() {
    var folded = new OriDomi('.psiofficial', {
        vPanels: 6,
        ripple: true,
        speed: 1200,
        shadingIntensity: 2,    // lessen the shading effect
        perspective: 800
    });

    setTimeout(function () {
        folded.accordion(50);
    }, 1000);
}).call(this);

