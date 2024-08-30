let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

//funcion para iniciar el juego al mismo 
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
// Este código le dice al botón de selección de mascota que, cuando el jugador haga clic en él, se ejecute la función seleccionarMascotaJugador. Esta función se encarga de gestionar la selección de la mascota del jugador.//
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

//obtine y asigna eventos a los botones de atque//    
    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra)
}
//definiendo funcion para que el enemigo elija una mascota y lo muestra en la pagina, obtiene los id de html con el elmento getelemnt..// 
function seleccionarMascotaJugador(){
    let inputwizar = document.getElementById("wizar");
    let inputjinx = document.getElementById("jinx");
    let inputluxor = document.getElementById("luxor");
    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if (inputwizar.checked) {
        spanMascotaJugador.innerHTML = "wizar";
    } else if(inputjinx.checked) {
         spanMascotaJugador.innerHTML = "jinx";
    } else if(inputluxor.checked) {
         spanMascotaJugador.innerHTML = "luxor";
    } else {
        alert("No seleccionaste ninguna mascota");
    }

    seleccionarMascotaEnemiga();
}
//definiendo funcion para que el enemigo (PC) elija su mascota//
function seleccionarMascotaEnemiga(){
    let mokemonAleatorio = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if(mokemonAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "wizar";
    } else if(mokemonAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "jinx";
    } else {
        spanMascotaEnemigo.innerHTML = "luxor";
    }
}
//definiendo funciones para que el jugador elija su ataque//
function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "AGUA";
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo();
}
//definiedno funciones para que el enemigo (PC) elija su ataque aleatoriamente y generando conatdor de vidas//
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO";
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA";
    } else {
        ataqueEnemigo = "TIERRA";
    }
//definiendo funcion para el combate PC VS JUgador y genrando contador de vidas//
    combateMortal()
}
function combateMortal(){
    let spanvidasJugador = document.getElementById("vidas-jugador");
    let spanvidasEnemigo = document.getElementById("vidas-enemigo");

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE 🤝")

      }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE😎")
         vidasEnemigo--
         spanvidasEnemigo.innerHTML = vidasEnemigo

      }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE😎")
         vidasEnemigo--
         spanvidasEnemigo.innerHTML = vidasEnemigo
         
      }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE😎") 
         vidasEnemigo--
         spanvidasEnemigo.innerHTML = vidasEnemigo
         
      }else{
        crearMensaje("PERDISTE😢")
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador

     
        
    }
    
    revisarVidas();
}
  
//creando funcion para revisar vidas//

function revisarVidas(){
    if(vidasEnemigo == 0){
       crearMensajeFinal = "FELICITACIONES GANASTE 😎"
    }else if(vidasJugador == 0){
        crearMensajeFinal = "MALA RACHA PERDISTE 😢"
    }
}


//definiendo funcion para imprimir los mensajes en patalla sobre la elecion de los ataques enemigo VS PC //
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes");

    let parrafo = document.createElement("p")
    parrafo.innerHTML =  "Tu mascota atacó con  " + ataqueJugador + "     la mascota del enemigo ataco con  " + ataqueEnemigo +" " + resultado

    sectionMensajes.appendChild(parrafo)

}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes");

    let parrafo = document.createElement("p")
    parrafo.innerHTML =  resultadoFinal

    sectionMensajes.appendChild(parrafo)

}

//definiendo funcion para aleatoriedad en invocarla cuando la necesitemos//
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
