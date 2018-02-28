value = 0;

window.onload=function(){
  document.getElementById("graphic1a").addEventListener("click", function(){
      var d = document.getElementById("graphic1a");
      d.className += " graphic1a";
  });
  document.getElementById("quiz_start").addEventListener("click", function(){
      value++;
      console.log(value);
  });
  quiz_init();
  quiz_start();
}

function quiz_init(){


}

function quiz_start(){


}