/*
onload="anchoBarra(contHappy/100);porcentBarra(contHappy,100)"
*/
function porcentBarra(contAngry,contDisgust,contFear,contHappy,contNeutral,contSad,contSurprise){//parte/t
    var t=parseInt(contAngry)+parseInt(contDisgust)+parseInt(contFear)+parseInt(contHappy)+parseInt(contNeutral)+parseInt(contSad)+parseInt(contSurprise);
    alert(contAngry);
    const pAngry = document.getElementById("utilizadoAngry");
    const pDisgust = document.getElementById("utilizadoDisgust");
    const pFear = document.getElementById("utilizadoFear");
    const pHappy = document.getElementById("utilizadoHappy");
    const pNeutral = document.getElementById("utilizadoNeutral");
    const pSad = document.getElementById("utilizadoSad");
    const pSurprise = document.getElementById("utilizadoSurprise");
           
    pAngry.innerText = Math.round(contAngry*100/t) + "%";
    pDisgust.innerText = Math.round(contDisgust*100/t) + "%";
    pFear.innerText = Math.round(contFear*100/t) + "%";
    pHappy.innerText = Math.round(contHappy*100/t) + "%";
    pNeutral.innerText = Math.round(contNeutral*100/t) + "%";
    pSad.innerText = Math.round(contSad*100/t) + "%";
    pSurprise.innerText = Math.round(contSurprise*100/t) + "%";
            
    /*anchoBarra(contAngry/t);
    anchoBarra(contDisgust/t);
    anchoBarra(contFear/t);
    anchoBarra(contHappy/t);
    anchoBarra(contNeutral/t);
    anchoBarra(contSad/t);
    anchoBarra(contSurprise/t);*/
    //anchoBarra(contAngry,contDisgust,contFear,contHappy,contNeutral,contSad,contSurprise);
}      

function anchoBarra(contAngry,contDisgust,contFear,contHappy,contNeutral,contSad,contSurprise){
    alert(contAngry+"hahaha");
    var t=parseInt(contAngry)+parseInt(contDisgust)+parseInt(contFear)+parseInt(contHappy)+parseInt(contNeutral)+parseInt(contSad)+parseInt(contSurprise);
    const elementAngry = document.querySelector(".htmlAngry");
    const elementDisgust = document.querySelector(".htmlDisgust");
    const elementFear = document.querySelector(".htmlFear");
    const elementHappy = document.querySelector(".htmlHappy");
    const elementNeutral = document.querySelector(".htmlNeutral");
    const elementSad = document.querySelector(".htmlSad");
    const elementSurprise = document.querySelector(".htmlSurprise");
    alert(t+"haashaha");
    elementAngry.style.setProperty("--offsetAngry",contAngry/t*580+"px");//580 es el ancho de la barra
    elementDisgust.style.setProperty("--offsetDisgust",contDisgust/t*580+"px");//580 es el ancho de la barra
    elementFear.style.setProperty("--offsetFear",contFear/t*580+"px");//580 es el ancho de la barra
    elementHappy.style.setProperty("--offsetHappy",contHappy/t*580+"px");//580 es el ancho de la barra
    elementNeutral.style.setProperty("--offsetNeutral",contNeutral/t*580+"px");//580 es el ancho de la barra
    elementSad.style.setProperty("--offsetSad",contSad/t*580+"px");//580 es el ancho de la barra
    elementSurprise.style.setProperty("--offsetSurprise",contSurprise/t*580+"px");//580 es el ancho de la barra
    //element.style.setProperty("width", num2*600 + "px");
}