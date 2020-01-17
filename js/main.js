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








window.onload = function () {
    let locations = document.querySelectorAll(".address-location");
    for (let i=0; i<locations.length; i++){
        locations[i].addEventListener("click", mapActivate);
    }
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