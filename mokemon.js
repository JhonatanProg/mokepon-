function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)

}
function selecionarMascotaJugador(){
    let inputwizar = document.getElementById("wizar");
    let inputjinx = document.getElementById("jix");
    let inputluxor = document.getElementById("luxor");



    if (inputwizar.checked) {
        alert("selecionaste Wizar")   
    } else if(inputjinx.checked) {
        alert("selecionaste jinx")   
    }else if(inputluxor.checked) {
        alert("selecionaste luxor")   
    }else{
        alert("no selecioanste ninguna mascota")
    }
}

window.addEventListener("load", iniciarJuego)