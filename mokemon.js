let ataqueJugador
let ataqueEnemigo



function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)
     
    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra)

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
        let mokemonAleatorio = aleatorio(1,3);
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

        if(mokemonAleatorio == 1) {
            spanMascotaEnemigo.innerHTML = "wizar"

        } else if(mokemonAleatorio == 2) {
            spanMascotaEnemigo.innerHTML = "jinx"

        } else {
            spanMascotaEnemigo.innerHTML = "luxor"

        }
     
        

    }

    function ataqueFuego() {
        ataqueJugador = "FUEGO"
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua() {
        ataqueJugador = "AGUA"
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra() {
        ataqueJugador = "TIERRA"
        ataqueAleatorioEnemigo()
    }
    function ataqueAleatorioEnemigo() {
        let ataqueAleatorio = aleatorio(1.3)
        
        if(ataqueAleatorio == 1) {
            ataqueEnemigo = "FUEGO"
        }
        else if(ataqueAleatorio == 2) {
            ataqueEnemigo = "AGUA"
        }
        else {
            ataqueEnemigo = "TIERRA"
        }

    }

    function aleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
}

window.addEventListener("load", iniciarJuego)