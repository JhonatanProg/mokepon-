function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)

}
function selecionarMascotaJugador(){
    let inputwizar = document.getElementById("wizar");
    let inputjinx = document.getElementById("jinx");
    let inputluxor = document.getElementById("luxor");
    let spanMascotaJugador = document.getElementById("mascota-jugador");




    if (inputwizar.checked) {
        spanMascotaJugador.innerHTML = "wizar"
    } else if(inputjinx.checked) {
         spanMascotaJugador.innerHTML = "jinx"
    }else if(inputluxor.checked) {
         spanMascotaJugador.innerHTML = "luxor"
    }else{
        alert("no selecioanste ninguna mascota")
    }
}

window.addEventListener("load", iniciarJuego)