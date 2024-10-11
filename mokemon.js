const sectionseleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

sectionReiniciar.style.display = "none"

const sectionseleccionarMascota = document.getElementById("seleccionar-mascota");


const spanMascotaJugador = document.getElementById
("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanvidasJugador = document.getElementById("vidas-jugador");
const spanvidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-Jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-Enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo;
let opcionDeMokepones;
let inputjinx;
let inputwizar; 
let inputluxor;
let mascotaJugador;
let ataquesMokepon
let botonAgua 
let botonTierra 
let botonFuego 
let botones = []
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon{
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let wizar = new Mokepon('wizar', 'https://i.imgur.com/BEMQLJl.png', 5)


let jinx = new Mokepon('jinx', 'https://i.imgur.com/mEScSXc.png', 5) 

let luxor = new Mokepon('luxor', 'https://i.imgur.com/HHyYYLA.png', 5)

wizar.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '⛰️', id: 'boton-tierra'},
)

jinx.ataques.push(
    {nombre: '⛰️', id: 'boton-tierra'},
    {nombre: '⛰️', id: 'boton-tierra'},
    {nombre: '⛰️', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},

)

luxor.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '⛰️', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},

)
mokepones.push(wizar,jinx,luxor)


//funcion para iniciar el juego al mismo 
function iniciarJuego(){
    
    sectionseleccionarAtaque.style.display = "none"

    mokepones.forEach((Mokepon) => {
       opcionDeMokepones = `
       <input type="radio" name="mascota" id=${Mokepon.nombre} />
        <label class="tarjeta-mokepon" for=${Mokepon.nombre}>
            <p>${Mokepon.nombre}</p>
            <img src= ${Mokepon.foto} alt=${Mokepon.nombre}>
        </label>
       `
      contenedorTarjetas.innerHTML += opcionDeMokepones

        inputjinx = document.getElementById("jinx");
        inputwizar = document.getElementById("wizar");
        inputluxor = document.getElementById("luxor");
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
//obtine y asigna eventos a los botones de atque//    
    
    botonReiniciar.addEventListener("click", reiniciarJuego);

}
//definiendo funcion para que el enemigo elija una mascota y lo muestra en la pagina, obtiene los id de html con el elmento getelemnt..// 
function seleccionarMascotaJugador(){
    
    sectionseleccionarMascota.style.display = "none"
    sectionseleccionarAtaque.style.display = "flex"
    
    if (inputwizar.checked) {
        spanMascotaJugador.innerHTML = inputwizar.id
        mascotaJugador = inputwizar.id
    } else if(inputjinx.checked) {
         spanMascotaJugador.innerHTML = inputjinx.id
         mascotaJugador = inputjinx.id
    } else if(inputluxor.checked) {
         spanMascotaJugador.innerHTML = inputluxor.id
         mascotaJugador = inputluxor.id
    } else {
        alert("No seleccionaste ninguna mascota");
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemiga();

}
function extraerAtaques(mascotaJugador) {
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            if (mascotaJugador === mokepones[i].nombre) {
                ataques = mokepones[i].ataques

            }
        }
        mostraAtaques(ataques)
    }

    function mostraAtaques(ataques){
        ataques.forEach((ataque) =>{
            ataquesMokepon = `
             <button id=${ataque.id} class="botones-ataques BAtaque">${ataque.nombre}🔥</button>
            `
            contenedorAtaques.innerHTML += ataquesMokepon
        } )
         botonAgua = document.getElementById("boton-agua"); botonTierra = document.getElementById("boton-tierra"); 
         botonFuego = document.getElementById("boton-fuego");
         botones = document.querySelectorAll('.BAtaque')

         

       

    }

    function secuenciaAtaque(){
        botones.forEach((boton) => {
            boton.addEventListener('click', (e) => {
                if (e.target.textContent === '🔥') {
                    ataqueJugador.push('FUEGO')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
                } else if (e.target.textContent === '💧'){
                    ataqueJugador.push('AGUA')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
                } else {
                    ataqueJugador.push('TIERRA')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
                }
            })
        }) 
    }

//definiendo funcion para que el enemigo (PC) elija su mascota//
function seleccionarMascotaEnemiga(){
    let mokemonAleatorio = aleatorio(0, mokepones.length -1);
    
    spanMascotaEnemigo.innerHTML =  mokepones[ mokemonAleatorio] .nombre
    secuenciaAtaque()
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
       crearMensajeFinal  ("FELICITACIONES GANASTE 😎")
    }else if(vidasJugador == 0){
        crearMensajeFinal("MALA RACHA PERDISTE 😢")  
        mostrarBotonReiniciar();
    }
}
   
   function mostrarBotonReiniciar(){
    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.style.display = "block"
}
    
//definiendo funcion para imprimir los mensajes en patalla sobre la elecion de los ataques enemigo VS PC //
function crearMensaje(resultado) {
    
    let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelenemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelenemigo.innerHTML = ataqueEnemigo
    // let parrafo = document.createElement("p")
    // parrafo.innerHTML =  "Tu mascota atacó con  " + ataqueJugador + "     la mascota del enemigo ataco con  " + ataqueEnemigo +" " + resultado
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelenemigo)

}
function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = "block"
    
}
function reiniciarJuego(){
    location.reload()
}
//definiendo funcion para aleatoriedad en invocarla cuando la necesitemos//
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
