/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */

const colors= ['#ff7171', '#fd9cb2', '#ffa2de', '#bb92ed', '#79dbff', '#ffd7d0', '#729ef8', '#68d5ab', '#ffe680']
const sequenciaSimon= []
let elegit = ""

function iniciarPartida(){
    numAleatori = Math.floor(Math.random() * colors.length);
    elegit = colors[numAleatori]
    sequenciaSimon.push(elegit);
    showNotification(elegit);
}

function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor=message
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000);
}

function comprovar(color){
    console.log(color)
}