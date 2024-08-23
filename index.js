var cos=document.getElementsByClassName("research-containers");
function readlessreview(rs){
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // }
    for(cy of cos){
         cy.classList.remove("active");
    }
    // event.currentTarget.classList.add("active");
    document.getElementById(rs).classList.add("active");
}




var co=document.getElementsByClassName("research-container");
function readmorereview(r){
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // }
    for(cy of co){
         cy.classList.remove("active");
    }
    // event.currentTarget.classList.add("active");
    document.getElementById(r).classList.add("active");
}



var cons=document.getElementsByClassName("award-containers");
function readlessaward(as){
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // }
    for(cs of cons){
         cs.classList.remove("active");
    }
    // event.currentTarget.classList.add("active");
    document.getElementById(as).classList.add("active");
}



var con=document.getElementsByClassName("award-container");
function readmoreaward(a){
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // }
    for(c of con){
         c.classList.remove("active");
    }
    // event.currentTarget.classList.add("active");
    document.getElementById(a).classList.add("active");
}



var touch=document.getElementsByClassName("navm");
function on(t){
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // }
    for(tou of touch){
         tou.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    // document.getElementById(n).classList.add("active-D");
}




var I=document.getElementsByClassName("images");
function Imagess(imag){
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // alert("hello world");
    // }
    for(i of I){
         i.classList.remove("Active");
    }
    // event.currentTarget.classList.add("active-link");
    document.getElementById(imag).classList.add("Active");
}



var descrip=document.getElementsByClassName("description");
function opentab(n){
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // }
    for(descri of descrip){
         descri.classList.remove("active-D");
    }
    // event.currentTarget.classList.add("active-link");
    document.getElementById(n).classList.add("active-D");
}


var workbtns=document.getElementsByClassName("workbtn");
var workcards=document.getElementsByClassName("work-cards");
function openwork(name){
     for(workbtn of workbtns){
         workbtn.classList.remove("active-b");
     }
    for(workcard of workcards){
         workcard.classList.remove("active-w");
    }
     event.currentTarget.classList.add("active-b");
    document.getElementById(name).classList.add("active-w");
}




var tablinks=document.getElementsByClassName("work-image-btn");
var descriptionss=document.getElementsByClassName("work-info");
var descriptionS=document.getElementsByClassName("work-card");
function workinfo(namee,names){
for(tablink of tablinks){
  tablink.classList.remove("active");
}

for(descriptio of descriptionss){
  descriptio.classList.remove("active");
}
for(descripti of descriptionS){
  descripti.classList.remove("active");
}
event.currentTarget.classList.add("active");
document.getElementById(namee).classList.add("active");
document.getElementById(names).classList.add("active");
}



var preloader = document.getElementById("preloader");
window.addEventListener("load", function(){
    preloader.style.display="none";
}
)


const sections = document.querySelectorAll("section[class]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("class");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navm[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navm[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


