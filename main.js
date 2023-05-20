let minutos= 3;
let segundos= 0;
cargarsec()


//cargamos los segundos 

function cargarsec(){

    let TextSegundos;


    if(segundos< 0){
        segundos=59;
    }

    //muestro los segundos en pantalla
    if(segundos< 10){
        TextSegundos= `0${segundos}`
    }else{
        TextSegundos=segundos
    }
    document.getElementById('segundos').innerHTML = TextSegundos;
    segundos--;
   
    cargarmins(segundos);

}

function cargarmins(segundos){
    let TextMin;
    if(segundos==-1 & minutos!=0){
        setTimeout(()=>{
            minutos --;
        }, 500)
    }else if(segundos==-1 & minutos==0){
        setTimeout(()=>{
            minutos= 59;
        }, 500)

    }

    if(segundos< 10){
        TextMin= `0${minutos}`
    }else{
        TextMin=minutos;
        setInterval(0, 1000)
    }
    if(minutos >3 || minutos <0){
        TextMin='00'
        clearInterval(intervalid)
       
        
       
    }
    document.getElementById('minutos').innerHTML = TextMin;
    


}
//se ejecuta cada segundo
let intervalid = setInterval(cargarsec, 1000);



