function clickTest(){
    console.log('Clicked!');
    console.log(this.getAttribute('data-url'));
}

function mapActivate(){
    let map = document.querySelector('#google_map');
    let activated = document.querySelector('.address-location.active');
    activated.classList.toggle('active');
    this.classList.toggle('active');
    let dataUrl = document.querySelector('.address-location.active').getAttribute('data-url');
    map.setAttribute("src", dataUrl);

}







// --- Smooth Scroll and call
function smoothScroll(dest, duration){
    let target = document.querySelector(dest);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;
    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d;
        return c*t*t*t + b;
};
    requestAnimationFrame(animation);
}

let scrollBtn = document.querySelector('#scroll_btn'); //button
scrollBtn.addEventListener("click", function(){ //Caller
    smoothScroll('h1', 1000);
});
//------



//HAMBURGER
let burgerToggle = function(toggle1, toggle2){
    toggle1.classList.toggle('active');
    toggle2.classList.toggle('hidden');
    // if toggle1.classList
}

// --- UNIFORM GREYOUT ---
let greyOut = function(trigger, greyTar, unCheck){
    for (grey of greyTar){ //toggles grey class
        if ((trigger.checked && !grey.classList.contains('greyed-out')) || (!trigger.checked && grey.classList.contains('greyed-out'))){
            grey.classList.toggle('greyed-out');
        }
    }
    if (trigger.checked){ //-- clears the radios when checked.
        for (radio of unCheck){
            if (radio.checked){
                radio.checked = false;
            }    
        }
    }    
}


window.onload = function () {
    //ADDRESS SWAPPER
    let locations = document.querySelectorAll(".address-location");
    for (let i=0; i<locations.length; i++){
        locations[i].addEventListener("click", mapActivate);
    }
    //BURGER
    let menu = document.querySelector('.hamburger-menu');
    let burgerId = document.querySelector('#hamburger_id');
    let nav = document.querySelector('nav');
    burgerId.addEventListener("click", function(){
        burgerToggle(menu, nav);
    });
     //UNIFORM
     let uniforms = document.querySelectorAll(".uniform-options");
     let uniformCheck = document.querySelector('#uniform');
     let unCheckUniform = document.querySelectorAll(".sizes-list input");
     uniformCheck.addEventListener("change", function(){
         greyOut(uniformCheck, uniforms, unCheckUniform);
     });
}

let scrollVisible = function() { //makes scroll btn visible if page is longer than height px
    let btn = document.querySelector('#scroll_btn');
    let height = 400; // Change this number depending on where you wish it to appear.
    let y = window.scrollY;
    if (btn.classList.contains('active')){
        if (y <= height){ 
            btn.classList.toggle('active');
        }
    } else if (y > height){
        btn.classList.toggle('active');        
    }
};

window.addEventListener("scroll", scrollVisible);



let h4s = document.querySelectorAll('.rules-container h4');

for (h4 of h4s){
    h4.addEventListener('click', function(){
        this.classList.toggle('active');
    });
}

// let h3Ol = document.querySelectorAll('.rules-container h3+ol');
// let h3Ul = document.querySelectorAll('.rules-container h3+ul');
let h3s = document.querySelectorAll('.rules-container h3');

for (h3 of h3s) {
    h3.addEventListener('click', function(){
        // console.log(this.nextElementSibling);
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    });
}




// let collapseList = function(trigger, target) {
//     let trigTag = this.tagName;

    
// }
// let accordianFunc = function(){
//     let thisTag = this.tagName;
//     let ol = document.querySelector(`${this}+ol`);
//     let ul = document.querySelector(`${this}+ul`);
//     if (this.classList.contains('active')){
        
//     } else {

//     }
// }