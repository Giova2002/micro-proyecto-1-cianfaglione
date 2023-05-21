let minutos;
let segundos;
//let tiempoRestante = 60; // 3 minutos en segundos

const cards = document.querySelectorAll(".carta");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let intervalid = null;
let start= false;
let ptos;
let miDiccionario = {};
let miLista = [];



// const btnOcultarModal= document.querySelector('#ocultar-modal');
// const contModal= document.querySelector('.modal-contents');
// const nombreInput= document.querySelector('#nombre');
// const apellidoInput= document.querySelector('#apellido');
function recolectarData(){
    miLista.push(miDiccionario);
    miLista.sort(function(a, b) {
        return b.score - a.score;
      });
    localStorage.setItem('lista', JSON.stringify(miLista));
    guardarEnLocalStorage();
     
}

function guardarEnLocalStorage(){
    miLista = JSON.parse(localStorage.getItem('lista'));
    let elements = document.getElementById('elements');
    elements.innerHTML = "";
    
    miLista.forEach(element => {
      let elements = document.getElementById('elements');
      let div = document.createElement("div");
      div.innerHTML =  "- " + element.nombre + " " + element.apellido +" ----> " + element.score;
      elements.appendChild(div);
    });  

    // miLista.forEach(element => {
    //     // Verifica si el elemento ya ha sido agregado al HTML
    //     if (!elementosAgregados[element.id]) {
    //       let elements = document.getElementById('elements');
    //       let div = document.createElement("div");
    //       div.innerHTML = element.nombre + " " + element.apellido +" Su Score es --> " + element.score;
    //       elements.appendChild(div);
    
    //       // Marca el elemento como agregado al HTML
    //       elementosAgregados[element.id] = true;
    //     }
    //   });
}


var modal = document.getElementById("modal");
var btnCerrar = document.getElementsByClassName("close")[0];

var modal_1 = document.getElementById("modal-1");
var btnCerrar_1 = document.getElementsByClassName("close-1")[0];


function ocultarModal_1() {
    modal_1.style.display = "none";
  }
  
btnCerrar_1.onclick = function() {
    
    ocultarModal_1(); 
  }


const startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', initGame);

// function abrirModal(){
    
// //     contModal.classList.add('mostrar');

// // }

// btnOcultarModal.addEventListener('click', (e)=>{
//     e.preventDefault();
// //     contModal.classList.remove('mostrar')
// })


// const enviarBtn = document.getElementById("enviar-btn");

// enviarBtn.addEventListener("click", function() {
//     console.log('hola')
//     // Obtener los valores de los inputs
//     const nombre = document.getElementById("nombre").value;
//     const apellido = document.getElementById("apellido").value;
//     console.log("Nombre:", nombre);
//     console.log("Apellido:", apellido);
//     // Ocultar el modal y empezar el tiempo
//     ocultarModal();
// });

const form= document.querySelector('form');
function ocultarModal() {

    modal.style.display = "none";
    start = true;
    intervalid = setInterval(cargarsec, 1000);
  }
  
btnCerrar.onclick = function() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    if (nombre !== "" && apellido !== "") {
        miDiccionario.nombre = nombre;
        miDiccionario.apellido = apellido;
        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
        ocultarModal(); 
        
      } else {
        // Al menos uno de los valores está vacío, mostrar un mensaje de error o hacer algo aquí
        modal.style.display = "block";
      }
    // localStorage.setItem("Nomnbre", nombre);
    // localStorage.setItem("Apellido", apellido);
    // miDiccionario.nombre = nombre;
    // miDiccionario.apellido = apellido;
    // console.log("Nombre:", nombre);
    // console.log("Apellido:", apellido);
    // ocultarModal(); 
  }


function initGame() {

    start= reset();
    tiempo_en_mins=0;
    tiempo_en_secs=0;

    minutos= 3;
    segundos= 0;
    puntaje.innerHTML=0;
    modal.style.display = "block";

    if (modal.style.display == "none") {
        ocultarModal();
        intervalid = setInterval(cargarsec, 1000);
      }
    
}


    // if(modal.style.display == "none"){
    //     start= true;
    //     intervalid=setInterval(cargarsec, 1000);

    // }
        // tiempo_en_mins=0;
        // tiempo_en_secs=0;

        // minutos= 1;
        // segundos= 0;
        // puntaje.innerHTML=0;
        // start= true;

        
        // intervalid=setInterval(cargarsec, 1000);

    // if(modal.style.display  == "none" ){
    //     tiempo_en_mins=0;
    //     tiempo_en_secs=0;

    //     minutos= 1;
    //     segundos= 0;
    //     puntaje.innerHTML=0;
    //     start= true;

        
    //     intervalid=setInterval(cargarsec, 1000);

    // }
    // abrirModal();

    
    // if(minutos ==0){
    //     shuffleCard();
    // }
    


function reset(){
    
    shuffleCard();
    clearInterval(intervalid)
    form.reset();
    return start= false

}
function score(tiempoRestante, tiempoTotal, puntuacionMaxima) {
    let puntuacion = puntuacionMaxima * (tiempoRestante / tiempoTotal);
    ptos=Math.floor(puntuacion);
    miDiccionario.score=ptos;
    puntaje.innerHTML= ptos;

    }

// function score(tiempoRestante, tiempoTotal, puntuacionMaxima) {
//     let tiempoTranscurrido;
//     tiempoTranscurrido= tiempoTotal - tiempoRestante;
//     let puntuacion = puntuacionMaxima * (tiempoRestante / tiempoTotal);
//     return Math.floor(puntuacion);
//     }

// function puntaja(){
//     let text_sec;
//     let text_min;
//     let tiempo_total= 180;
//     tiempo_en_mins= document.getElementById('minutos').innerHTML;
//     tiempo_en_secs= document.getElementById('segundos').innerHTML;
//     let tiempo_convertido;
//     if(tiempo_en_mins>=3){
//         tiempo_convertido= tiempo_en_mins *60;
//     }

    
//     tiempoRestante= tiempo_convertido + tiempo_en_secs;

//     puntuación = puntuación_máxima * (tiempo_restante / tiempo_total)
//     //puntuación_máxima=puntuación;

// }




function flipCard({target: clickedCard}) {
    if(start === true){
        if(cardOne !== clickedCard && !disableDeck) {
            clickedCard.classList.add("flip");
            if(!cardOne) {
                return cardOne = clickedCard;
            }
            cardTwo = clickedCard;
            disableDeck = true;
            let cardOneImg = cardOne.querySelector(".view-back img").src,
            cardTwoImg = cardTwo.querySelector(".view-back img").src;
            matchCards(cardOneImg, cardTwoImg);
        }

    }
    
}

function matchCards(img1, img2) {
    
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
            clearInterval(intervalid)
            start=false;
            let tiempoRestante =parseInt(document.getElementById('minutos').innerHTML) * 60 + parseInt(document.getElementById('segundos').innerHTML);
            let puntuacionTotal = score(tiempoRestante, 180, 100);
            recolectarData();
            setTimeout(function() {
                modal_1.style.display = "block";;
              }, 2000 );

            // modal_1.style.display = "block";
            console.log(`El tiempo se ha acabado. Tu puntuación es: ${puntuacionTotal}`);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;

    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".view-back img");
        imgTag.src = `foto/foto${arr[i]}.jpeg`;
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});








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
            minutos= 0;
            clearInterval(intervalid)
        }, 500)
        start= false;
        shuffleCard();
        let tiempoRestante =parseInt(document.getElementById('minutos').innerHTML) * 60 + parseInt(document.getElementById('segundos').innerHTML);
        let puntuacionTotal = score(tiempoRestante, 180, 100);
        
        recolectarData();
        setTimeout(function() {
            modal_1.style.display = "block";;
          }, 1000 );

        // modal_1.style.display = "block";
        
        console.log(`El tiempo se ha acabado. Tu puntuación es: ${puntuacionTotal}`);
        //let puntuaciontotal= score(tiempoRestante, 180,100)
        
        console.log(`El tiempo se ha acabado`)

    }

    if(segundos< 10){
        TextMin= `0${minutos}`
    }else{
        TextMin=minutos;
        setInterval(0, 1000)
    }
    document.getElementById('minutos').innerHTML = TextMin;
    


}

//se ejecuta cada segundo



// console.log(`El tiempo se ha acabado`)
//       clearInterval(timer)

// function mostrarTabla() {
//     var datos = JSON.parse(localStorage.getItem("datos")); // obtiene los datos del LocalStorage y los convierte en un objeto JavaScript
//     var tablaBody = document.getElementById("tabla-body"); // obtiene el cuerpo de la tabla
  
//     for (var i = 0; i < datos.length; i++) {
//       var fila = document.createElement("tr"); // crea una nueva fila de la tabla
  
//      // crea las celdas de la fila con los datos correspondientes
//       var nombreCel = document.createElement("td");
//       nombreCel.textContent = datos[i].nombre;
//       var emailCel = document.createElement("td");
//       emailCel.textContent = datos[i].email;
//       var telefonoCel = document.createElement("td");
//       telefonoCel.textContent = datos[i].telefono;
  
//       // agrega las celdas a la fila
//       fila.appendChild(nombreCel);
//       fila.appendChild(emailCel);
//       fila.appendChild(telefonoCel);
  
//       // agrega la fila al cuerpo de la tabla
//       tablaBody.appendChild(fila);
//     }
//   }
  
  // llama a la función para mostrar la tabla al cargar la página
//   window.onload = function() {
//     mostrarTabla();
//   }