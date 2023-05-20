let minutos;
let segundos;
let tiempoRestante = 60; // 3 minutos en segundos

const cards = document.querySelectorAll(".carta");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let intervalid = null;
let start= false;




const startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', initGame);

function initGame() {

    start= reset();
    
    minutos= 1;
    segundos= 0;
    start= true;

    
    intervalid=setInterval(cargarsec, 1000);
    // if(minutos ==0){
    //     shuffleCard();
    // }
    
    
}

function reset(){
    
    shuffleCard();
    clearInterval(intervalid)
    return start= false


}




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


