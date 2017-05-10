//GlobalVariables

let extincion = document.getElementById("extincion");
let extincionText = document.getElementById("extitext");
let origen = document.getElementById("origen");
let origenText = document.getElementById("origentex");
let restaurar = document.getElementById("restaurar");
let closer = document.getElementsByTagName("span");
let pandaPicture =document.getElementsByClassName("picture");
//Events

extincion.addEventListener("click", hideExtincion);
origen.addEventListener("click", hideOrigen);
closer.addEventListener("click",closeImg);
restaurar.addEventListener("click",restart);



//These functions allow hiding and appearing texts

function hideExtincion() {
    if (extincionText && extincionText.style.display == "none"){
        extincionText.style.display = "block";
    }
    else{
      extincionText.style.display = "none" ; 
    }
    }
function hideOrigen() {
    if (origenText && origenText.style.display == "none"){
        origenText.style.display = "block";
    }
    else{
      origenText.style.display = "none"; 
    }
    }
//This function closes the image

for(i = 0; i < closer.length; i ++){
    closer[i].addEventListener("click", closeImg);
}

function closeImg(){
    
}