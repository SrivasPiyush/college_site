var menuExpanded = false;
let backgroundMenu = document.getElementsByClassName('BackgroundMenu');
function menuClicked(){
    var bodyContainer = document.getElementById('id_BodyContainer');
    bodyContainer.classList.remove('BodyContainerSlidesDown');
    bodyContainer.classList.remove('BodyContainerSlidesUp');
  

    reset_animation();

    if(menuExpanded){
        bodyContainer.style.top = "5vh";
        bodyContainer.style.left = window.innerWidth <= 990 ? "40vw" : "15vw";
        bodyContainer.classList.add('BodyContainerSlidesUp');
        menuExpanded = false;
    }else{
        bodyContainer.style.top = "0";
        bodyContainer.style.left = "0";
        bodyContainer.classList.add('BodyContainerSlidesDown');
        menuExpanded = true;
    }
}

function reset_animation() {
    var el = document.getElementById('id_BodyContainer');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}
