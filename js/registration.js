
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
    //UNIFORM
    let uniforms = document.querySelectorAll(".uniform-options");
    let uniformCheck = document.querySelector('#uniform');
    let unCheckUniform = document.querySelectorAll(".sizes-list input");
    uniformCheck.addEventListener("change", function(){
        greyOut(uniformCheck, uniforms, unCheckUniform);
    });
}
//-----