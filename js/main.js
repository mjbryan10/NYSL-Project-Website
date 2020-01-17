


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
}