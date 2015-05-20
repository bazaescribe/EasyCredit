function scrollMenu(){
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  var breakpoint = 50;
  
  head  = document.getElementById("nav-header");
  menu  = document.getElementById("menu");
  color = document.getElementById("logo-color");
  white = document.getElementById("logo-white");
  moto  = document.getElementById("moto");
  burger = document.getElementById("burger");
  
  if(top >= breakpoint){ //Cuando baja
    head.style.backgroundColor = 'rgba(255, 255, 255, .93)';
    head.style.borderBottom = '1px solid #dedede';
    menu.style.color = "#5c666f";
    white.style.display = "none";
    color.style.display = "";
    moto.style.color = "#5c666f";
    burger.style.color = "#5c666f";
  }else{ //Cuando sube
    head.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    head.style.borderBottom = 'none';
    menu.style.color = "white";
    white.style.display = "";
    color.style.display = "none";
    moto.style.color = "white";
    burger.style.color = "white";
  }
}

//$(menu).animate({left: "-=300px"}, 300);