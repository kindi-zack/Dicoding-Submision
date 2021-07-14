var jumbotron = document.getElementById("jumbotron");
var navBar    = document.getElementsByTagName("nav")[0];
var footer    = document.getElementsByTagName("footer")[0];
var sun       = document.getElementsByClassName("sun")[0];
var main      = document.getElementsByTagName("main")[0];
var paragraf  = document.querySelectorAll("p");

var counter = document.querySelectorAll("span")[1]
var switching = document.querySelectorAll(".sun")[0];
switching.addEventListener("click",function(){
  var hasil = counter.innerText++;
  if (hasil%2===0){
    jumbotron.style.backgroundColor = "#1b1b2f";
    navBar.style.backgroundColor    = "#1b1b2f";
    footer.style.backgroundColor    = "#1b1b2f";
    main.style.backgroundColor      = "#1f4068";
    for(var i =0;i<paragraf.length;i++){
      paragraf[i].style.color       = "#e4f9f5";
    }
    sun.setAttribute("src","assets/moon.png");
  }else{
    jumbotron.style.backgroundColor = "#e4f9f5";
    navBar.style.backgroundColor    = "#e4f9f5";
    footer.style.backgroundColor    = "#66BFBF";
    main.style.backgroundColor      = "white";
    for(var i =0;i<paragraf.length-1;i++){
      paragraf[i].style.color       = "black";
    }
    sun.setAttribute("src","assets/sun4.png");
  }
})
