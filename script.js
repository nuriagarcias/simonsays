/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */

const colors= ['#ffd1dc', '#ffef96', '#aaff80']
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