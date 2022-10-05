const config = {smoothness: 0.40};//Inicia >0 y <1
    CY.loader()
    .licenseKey("150c1d09b4fbce6026580794d9f31f782195317c307d")//Carga Lincencia 
    .addModule(CY.modules().FACE_DETECTOR.name)//detector de la cara MTCNN
    .addModule(CY.modules().FACE_EMOTION.name, config)//detectar emociones
    .load()
    .then(({ start, stop }) => start());//inciar servicio

    /*window.addEventListener(CY.modules().FACE_DETECTOR.eventName, (evt) => {
    console.log('Face detector result', evt.detail);
});*/
    const canvas = document.createElement('canvas');//crea un elemento 
    document.body.appendChild(canvas);

    window.addEventListener(CY.modules().CAMERA.eventName, (event) => {//agregamos evento en evento
        console.log('New frame in input');                              // escucha camara
        const ctx = canvas.getContext('2d');//dos dimensiones con respecto a la imagen q se lee
        const imageData = event.detail;
        ctx.canvas.width = imageData.width;
        ctx.canvas.height = imageData.height;
        ctx.putImageData(imageData, 100, 0);//la posicion en pantalla de la camara

});
    window.addEventListener(CY.modules().FACE_EMOTION.eventName, (evt) => {//Otro evento q detecta emocion de la cara
        //var feliza=0;
    
    console.log('Emotion result', evt.detail);
    var dominante=evt.detail.output.dominantEmotion;

    if(dominante=="Angry"){
        contAngry++;
        todo++;
    }
    else if(dominante=="Disgust"){
        contDisgust++;
        todo++;
    }
    else if(dominante=="Fear"){
        contFear++;
        todo++;
    }
    else if(dominante=="Happy"){
        contHappy++;
        todo++;
    }
    else if(dominante=="Neutral"){
        contNeutral++;
        todo++;
    }
    else if(dominante=="Sad"){
        contSad++;
        todo++;
    }
    else if(dominante=="Surprise"){
        contSurprise++;
        todo++;
    }
    document.getElementById("freAngry").innerHTML = contAngry;
    document.getElementById("freDisgust").innerHTML = contDisgust;
    document.getElementById("freFear").innerHTML = contFear;
    document.getElementById("freHappy").innerHTML = contHappy;
    document.getElementById("freNeutral").innerHTML = contNeutral;
    document.getElementById("freSad").innerHTML = contSad;
    document.getElementById("freSurprise").innerHTML = contSurprise;
    
    var contador=evt.detail.output.emotion['Angry']*100;  
    document.getElementById("angry").innerHTML = evt.detail.output.emotion['Angry']*100;

    document.getElementById("disgust").innerHTML = evt.detail.output.emotion['Disgust']*100;
    contador+=evt.detail.output.emotion['Disgust']*100;

    document.getElementById("fear").innerHTML = evt.detail.output.emotion['Fear']*100;
    contador+=evt.detail.output.emotion['Fear']*100;


    document.getElementById("happy").innerHTML = evt.detail.output.emotion['Happy']*100;
    contador+=evt.detail.output.emotion['Happy']*100;

    document.getElementById("neutral").innerHTML = evt.detail.output.emotion['Neutral']*100;
    contador+=evt.detail.output.emotion['Neutral']*100;


    document.getElementById("sad").innerHTML = evt.detail.output.emotion['Sad']*100;
    contador+=evt.detail.output.emotion['Sad']*100;

    document.getElementById("surprise").innerHTML = evt.detail.output.emotion['Surprise']*100;
    contador+=evt.detail.output.emotion['Surprise']*100;

    document.getElementById("total").innerHTML = contador;

    //porcentBarra(contHappy,todo);
    //anchoBarra(contHappy/todo);
    porcentBarra();

});
function porcentBarra(){//parte/todo
    const pAngry = document.getElementById("utilizadoAngry");
    const pDisgust = document.getElementById("utilizadoDisgust");
    const pFear = document.getElementById("utilizadoFear");
    const pHappy = document.getElementById("utilizadoHappy");
    const pNeutral = document.getElementById("utilizadoNeutral");
    const pSad = document.getElementById("utilizadoSad");
    const pSurprise = document.getElementById("utilizadoSurprise");
           
    pAngry.innerText = (contAngry*100/todo) + "%";
    pDisgust.innerText = (contDisgust*100/todo) + "%";
    pFear.innerText = (contFear*100/todo) + "%";
    pHappy.innerText = (contHappy*100/todo) + "%";
    pNeutral.innerText = (contNeutral*100/todo) + "%";
    pSad.innerText = (contSad*100/todo) + "%";
    pSurprise.innerText = (contSurprise*100/todo) + "%";
            
    /*anchoBarra(contAngry/todo);
    anchoBarra(contDisgust/todo);
    anchoBarra(contFear/todo);
    anchoBarra(contHappy/todo);
    anchoBarra(contNeutral/todo);
    anchoBarra(contSad/todo);
    anchoBarra(contSurprise/todo);*/
    anchoBarra();
}      

function anchoBarra(){
    const elementAngry = document.querySelector(".htmlAngry");
    const elementDisgust = document.querySelector(".htmlDisgust");
    const elementFear = document.querySelector(".htmlFear");
    const elementHappy = document.querySelector(".htmlHappy");
    const elementNeutral = document.querySelector(".htmlNeutral");
    const elementSad = document.querySelector(".htmlSad");
    const elementSurprise = document.querySelector(".htmlSurprise");

    elementAngry.style.setProperty("--offsetAngry",contAngry/todo*580+"px");//580 es el ancho de la barra
    elementDisgust.style.setProperty("--offsetDisgust",contDisgust/todo*580+"px");//580 es el ancho de la barra
    elementFear.style.setProperty("--offsetFear",contFear/todo*580+"px");//580 es el ancho de la barra
    elementHappy.style.setProperty("--offsetHappy",contHappy/todo*580+"px");//580 es el ancho de la barra
    elementNeutral.style.setProperty("--offsetNeutral",contNeutral/todo*580+"px");//580 es el ancho de la barra
    elementSad.style.setProperty("--offsetSad",contSad/todo*580+"px");//580 es el ancho de la barra
    elementSurprise.style.setProperty("--offsetSurprise",contSurprise/todo*580+"px");//580 es el ancho de la barra
    //element.style.setProperty("width", num2*600 + "px");
}


/*
function porcentBarra(num1,num2){//parte/todo
    const p = document.getElementById("dineroUtilizado");
           
    p.innerText = (num1*100/num2) + "%";
            
}      

function anchoBarra(num2){
    const element = document.querySelector(".html");
    element.style.setProperty("--offset",num2*580+"px");//580 es el ancho de la barra
    //element.style.setProperty("width", num2*600 + "px");
}
*/