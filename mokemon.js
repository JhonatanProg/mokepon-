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

    seleccionarMascotaEnemiga()

    function seleccionarMascotaEnemiga(){
        let ataqueAleatorio = aleatorio(1,3);
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

        if(ataqueAleatorio == 1) {
            spanMascotaEnemigo.innerHTML = "wizar"

        } else if(ataqueAleatorio == 2) {
            spanMascotaEnemigo.innerHTML = "jinx"

        } else {
            spanMascotaEnemigo.innerHTML = "luxor"

        }
     
        

    }

    function aleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
}

window.addEventListener("load", iniciarJuego)