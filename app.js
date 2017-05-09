//GlobalVariables

let extincion = document.getElementById("extincion");
let extincionText = document.getElementById("extitext");
let origen = document.getElementById("origen");
let origenText = document.getElementById("origentex");
let close = document.getElementsByClassName("close");
let pandaPicture =document.getElementsByClassName("pandapicture");
//Events

extincion.addEventListener("click", hideExtincion);
origen.addEventListener("click", hideOrigen);
//close.addEventListener("click", closeImg);


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