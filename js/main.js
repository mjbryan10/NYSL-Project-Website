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
window.onload = function () {
    let locations = document.querySelectorAll(".address-location");
    for (let i=0; i<locations.length; i++){
        locations[i].addEventListener("click", mapActivate);
    }
    // document.querySelector('#scroll_btn').addEventListener("click", scrollUp); //click for scrollup
}

var scrollVisible = function() { //makes scroll btn visible if page is longer than (x)px
    let btn = document.querySelector('#scroll_btn');
    let height = 400;
    var y = window.scrollY;
    if (btn.classList.contains('active')){
        if (y <= height){ 
            btn.classList.toggle('active');
        }
    } else if (y > height){
        btn.classList.toggle('active');        
    }
    // console.log(y);
};

window.addEventListener("scroll", scrollVisible);