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

// var preloader = document.getElementById("preloader");
// window.addEventListener("load", function(){
//     setTimeout(function() {
//         preloader.style.display="none";
// }, 5000);
    
// }
// )

window.onload = function() {
    // Show the loader for 5 seconds
    setTimeout(function() {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 5000); // 5000ms = 5 seconds
  };



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



// var preloader = document.getElementById("preloader");
// window.addEventListener("load", function(){
//     preloader.style.display="none";
// }
// )


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



             
const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
    {
        photo:
        "url('dp.webp')",
        name: "MR PRITAM GHOSH, 40/M",
        profession: "KOLKATA (IT ENGINEER)",
        description:
            "I was admitted for dengue and doctors told me it’s very serious. Unfortunately, my eye also got infected and DrDhaivat checked my eyes in the ICU. He explained me and my family that the eye is severely infected and has to be removed at any cost otherwise the infection might spread to the brain. My family was very shocked hearing that and refused at first, but he explained us the seriousness of the situation. Two days later, my lungs collapsed and I was put on ventilator. Since I couldn’t be shifted to the operation theatre, DrDhaivat came along with his team and arranged for a bedside surgery. It was God’s grace that the surgery went fine, and a week later, I was feeling much better. The ICU doctor told me that the infective origin might have been in the eye, and since it was removed, all my body started functioning better. Today after 1 year, I still call DrDhaivat Shah every few months to thank him to take that critical decision and save my life. I have one normal and one artificial eye today, and I am very thankful to God for this life."
    },

    {
        photo:
        "url('dp.webp')",
        name: "MR ANKIT TIWARI, 45/M",
        profession: "INDORE (ACCOUNTANT)",
        description:
            "I am a type 1 diabetic and on insulin since past 20 years. I had a bleeding in the retina of the right eye which was not resolving with medicine. I consulted and met Dr Dhaivat and he advised me surgery for the same to remove the blood. It was a painless surgery, and he made sure I was comfortable throughout. 1 month after surgery, my vision is back to normal, and I am very grateful to him for that. He asked to control my blood sugar very strictly, and I will do my best for it now."
    },

    {
        photo:
        "url('dp.webp')",
        name: "DR ANMOL NAIK, 33/M",
        profession: "PUNE (DOCTOR)",
        description:
            "A doctor with infinite compassion, excellent clinical acumen and surgical expertise of highest level. He is a person who will guide you genuinely, holistically and with practical approach. Definitely recommend him for retina related eye issues! You wont regret meeting him!"
    },

    {
        photo:
            "url('dp.webp')",
        name: "JAYA PARMAR, 20/F",
        profession: "MANSORE (STUDENT)",
        description:
            "I had a retinal detachment in my eye and the vision was completely gone since the past 6 months. I left college because I was very depressed as the local doctor in my town told me the eye is gone. DrDhaivat Sir advised me surgery and motivated me to undergo operation. After 3 months of surgery today, I can see 80 percent with that eye and have started my studies back. I am very happy to see him, and he motivates me even today for higher studies. Very kind hearted and great experienced doctor."
    },
    {
        photo:
        "url('dp.webp')",
        name: "DR NEETHA P",
        profession: "BANGLORE (DOCTOR)",
        description:
            "Dr. Dhaivat is an amazing clinician. He communicates effectively and empathically with patients. He has an immense passion for Vitreoretinal surgery and manages to excel at research and academics at the same time. A mentor par excellence, he is always available for his students. He incorporates constantly changing technologies into his clinical practice for the benefit of his patients. He is one of the most promising young Vitreoretinal surgeons in the country. Over the years, he has garnered many recognitions and strives for excellence in his practice. He would surely be your go-to doctor with that personal touch!"
    },
    {
        photo:
        "url('dp.webp')",
        name: "MR NANHE MD SHABUDDIN, 65/M,",
        profession: "NEW DELHI (RETIRED BANK MANAGER)",
        description:
            "I was operated for left eye cataract surgery in my hometown, but there was some problem and doctor said new lens cannot be placed. I flew to Chennai and met Dr DKS and Dr PKA there. They operated my eye and placed a new lens and now my vision is very good. I was very surprised to see how humble and how nicely they explained me the entire procedure, in spite of being so busy in their practice."
    },
    {
        photo:
        "url('dp.webp')",
        name: "MR DEVDADJI, 57/M",
        profession: "INDORE (BUSINESSMAN)",


        description:
            "I was blinded in one eye due to diabetes. The other eye also had a large hemorrhage and no doctor was taking my case since it was risky. My friend told me to visit DrDhaivat Shah at Choithram Netralaya. He saw my case and explained me that has high risks but if not operated it will surely be lost. He gave me courage and operated my eye. Today I nearly have 80% vision in that eye and am very very happy with my life. I make sure my sugar is well controlled now and I keep meeting Dr Shah ever 3 months."
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "MR PRASHANT KUNTE, 55/M,",
        profession: "INDORE (TEACHER)",


        description:
            "Very knowledgeable and highly competent. Accurate diagnosis and extremely well planned treatment schedule. A gentleman of the highest order. Takes care to keep his patients comfortable and informed. I highly recommend Dr Dhaivat as a retina surgeon."
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "MR HIMANSHU SHARMA, 30/M",
        profession: "INDORE (ENGINEER)",


        description:
            "I had injury with hammer and iron particle went inside my retina. Dr Dhaivat Shah operated me and removed the piece of iron. My vision is good now and I am extremely grateful for his efforts and motivation."
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "JAHIDA BEE, 50/F",
        profession: "DHAR (TEACHER)" ,


        description:
            "Dr Shah treatment me with injections inside the eye because of small membrane in my retina. After 4 injections I am feeling much better and my vision has come back to normal. He has asked me to come for routine follow up and I am doing that since the past 1 year."
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "MR DHARMENDRA, 30/M",
        profession: "INDORE (UPSC STUDENT)" ,


        description:
            "Because of injury to left eye, I had a large bleeding in the retina. I met Dr Shah sir and he tried treating it with medicines. But it did not go away, so he advised me to under retina operation. 1 month post operation, I got 90 percent of my vision back and I am very happy with treatment. I wish him all the best for his bright future."
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "MR KRISHNA SOLANKI, 60/M",
        profession: "KHANDWA, MP (TEACHER)" ,


        description:
            "I underwent retinal surgery with Dr. Dhaivat Shah. He is very gentle and kind. He also came to my room to show me how to lie in prone position. Very kind nature. I am very happy with the overall treatment and vision."
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "MR MAHESH SHUKLA, 50/M",
        profession: "INDORE (JOB)" ,


        description:
            "All staff behaved very well. I came in blind, could not even see food in my plate. Dr Shah told me I had bleeding with retinal detachment in both eyes due to my uncontrolled diabetes. He made sure my diabetes got controlled first and referred me to a physician who started insulin therapy for me. After control, he operated both eyes within a gap for 2 weeks. Today, I come for follow up myself. I am independent with vision now and I am forever grateful for his efforts. My personal blessing for him."
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "MR MAHESH DALAL",
        profession: "AHMEDABAD (RESEARCHER)" ,


        description:
            "Very intelligent and contemporary genious approach. Kudos to the tender hearted eye care super speciality coupled with smiling n positivity"
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "MISS ANJALI AHUJA",
        profession: "AHMEDABAD (OPTOMETRIST)" ,


        description:
            "I know Dr. Dhaivat since his residency days and learnt alot of clinical skills from him. His in depth knowledge, and creative approach for each and every case has always inspired me."
    }  ,
    {
        photo:
        "url('dp.webp')",
        name: "MR ARCHIT KOTHARI",
        profession: "INDORE (BUSINESSMAN)" ,


        description:
            "Very dedicated & professional Eye Surgeon. I have known Dr. Dhaivat Shah from a long time now. His diagnosis & treatment has been impeccable."
    }
    ,
    {
        photo:
        "url('dp.webp')",
        name: "DR ANAND BHAGDE",
        profession: "JAMNAGAR, GUJARAT (DOCTOR)" ,


        description:
            "Accurate diagnosis. One of the best in the department of Retina and Vitreo-Retinal surgery. Highly recommend"
    }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
    let reviewWrapWidth = reviewWrap.offsetWidth + "px";
    let descriptionHeight = description.offsetHeight + "px";
    //(+ or -)
    let side1symbol = whichSide === "left" ? "" : "-";
    let side2symbol = whichSide === "left" ? "-" : "";

    let tl = gsap.timeline();

    if (isChickenVisible) {
        tl.to(chicken, {
            duration: 0.4,
            opacity: 0
        });
    }

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 0,
        translateX: `${side1symbol + reviewWrapWidth}`
    });

    tl.to(reviewWrap, {
        duration: 0,
        translateX: `${side2symbol + reviewWrapWidth}`
    });

    setTimeout(() => {
        imgDiv.style.backgroundImage = people[personNumber].photo;
    }, 400);
    setTimeout(() => {
        description.style.height = descriptionHeight;
    }, 400);
    setTimeout(() => {
        personName.innerText = people[personNumber].name;
    }, 400);
    setTimeout(() => {
        profession.innerText = people[personNumber].profession;
    }, 400);
    setTimeout(() => {
        description.innerText = people[personNumber].description;
    }, 400);

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 1,
        translateX: 0
    });

    if (isChickenVisible) {
        tl.to(chicken, {
            duration: 0.4,
            opacity: 1
        });
    }
}

function setNextCardLeft() {
    if (currentPerson === 16) {
        currentPerson = 0;
        slide("left", currentPerson);
    } else {
        currentPerson++;
    }

    slide("left", currentPerson);
}

function setNextCardRight() {
    if (currentPerson === 0) {
        currentPerson = 16;
        slide("right", currentPerson);
    } else {
        currentPerson--;
    }

    slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

// surpriseMeBtn.addEventListener("click", () => {
//     if (chicken.style.opacity === "0") {
//         chicken.style.opacity = "1";
//         imgDiv.classList.add("move-head");
//         surpriseMeBtn.innerText = "Remove the chicken";
//         surpriseMeBtn.classList.remove("surprise-me-btn");
//         surpriseMeBtn.classList.add("hide-chicken-btn");
//         isChickenVisible = true;
//     } else if (chicken.style.opacity === "1") {
//         chicken.style.opacity = "0";
//         imgDiv.classList.remove("move-head");
//         surpriseMeBtn.innerText = "Surprise me";
//         surpriseMeBtn.classList.add("surprise-me-btn");
//         surpriseMeBtn.classList.remove("hide-chicken-btn");
//         isChickenVisible = false;
//     }
// });

window.addEventListener("resize", () => {
    description.style.height = "100%";
});


