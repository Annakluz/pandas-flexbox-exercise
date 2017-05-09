//GlobalVariables

let extincion = document.getElementById("extincion");
let extincionText = document.getElementById("extitext");
let origen = document.getElementById("origen");
let origenText = document.getElementById("origentex");
let restaurar = document.getElementById("restaurar");


let pandaPicture =document.getElementsByClassName("pandared");
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

function pandasClose() {
   let close = document.getElementsByClassName("close");
    [].forEach.call(close, function(elemento){
        elemento.addEventListener("click", closeImg)
    });
}
pandasClose();

function closeImg(){
    let imgPanda = this.parentElement;
    imgPanda.style.display = "none";
}

function restart(){ 
let close = document.getElementsByClassName("close");

    for(let i = 0; i < close.length; i++){
        close[i].parentElement.style.display = "flex";
    }
}