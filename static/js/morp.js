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
    }
    else if(dominante=="Disgust"){
        contDisgust++;
    }
    else if(dominante=="Fear"){
        contFear++;
    }
    else if(dominante=="Happy"){
        contHappy++;
    }
    else if(dominante=="Neutral"){
        contNeutral++;
    }
    else if(dominante=="Sad"){
        contSad++;
    }
    else if(dominante=="Surprise"){
        contSurprise++;
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


});