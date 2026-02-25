/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */

const colors= ['#ff7171', '#fd9cb2', '#ffa2de', '#bb92ed', '#79dbff', '#ffd7d0', '#729ef8', '#68d5ab', '#ffe680']
const sequenciaSimon= []
let elegit = ""
let comptadorSimon;
let comptadorMostrats;


function iniciarPartida(){
    numAleatori = Math.floor(Math.random() * colors.length);
    elegit = colors[numAleatori]
    sequenciaSimon.push(elegit);
    comptadorMostrats = 0
    comptadorSimon =0;
    showNotification()
    document.getElementById("message").innerHTML = "Nivell " + sequenciaSimon.length;

}

function showNotification() {

    var notification = document.getElementById('notification');
    notification.style.backgroundColor=sequenciaSimon[comptadorMostrats];
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
        comptadorMostrats +=1
        if(comptadorMostrats < sequenciaSimon.length){
            showNotification();
        }
    }, 2000);
}

function comprovar(colors){
    console.log(colors)
    if (colors === sequenciaSimon[comptadorSimon]){
        comptadorSimon++;
        if (comptadorSimon === sequenciaSimon.length){
            iniciarPartida();

        }
    }else{
        document.getElementById("message").innerHTML = "Game over";
        console.log('game over')
        reiniciar()
    }
}

function reiniciar(){
    sequenciaSimon.splice(0,sequenciaSimon.length);

}