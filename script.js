/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */

// Constats i elements
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
    document.getElementById("message").innerHTML = "Nivel " + sequenciaSimon.length;
    document.getElementById("boto").hidden = true;  // amaga
}

// Mostrar colors
function showNotification() {

    var notification = document.getElementById('notification');
    notification.style.backgroundColor=sequenciaSimon[comptadorMostrats];
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
        comptadorMostrats +=1
        if(comptadorMostrats < sequenciaSimon.length){
            setTimeout(function() {
                showNotification();

            }, 250);
        }
    }, 750);
}

// Comprovador de colors
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
        document.getElementById("boto").hidden = false;
        setTimeout(function(colors){}, 1000)
        reiniciar()
    }
}


function reiniciar(){
    sequenciaSimon.splice(0,sequenciaSimon.length);

}