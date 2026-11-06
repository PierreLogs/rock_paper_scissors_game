console.log("Juego de piedra, papel y tijeras\n");

let jugador1;

let scoreJugador1 = 0;
let scoreJugador2 = 0;

let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijeras = document.getElementById("tijeras");

//Utilizar esta función para devolver los valores de juego aleatorio para maquina. 1 = piedra, 2 = papel, 3 = tijeras*
function getRandomNum(min, max){
    //min = Math.ceil(min);
    //max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1))+min;
}

//asignación de restultados con retorno en strings
function playMachine(num){
    if(num === 1) return "piedra";
    if(num === 2) return "papel";
    if(num === 3) return "tijeras";
}

//inicio de juego y comparación de respuestas
function playJugador2(jugador2){
    const resultado = document.getElementById("resultado");
    const imagenes = {
        piedra: "./assets/icons/rock.png",
        papel: "./assets/icons/paper.png",
        tijeras: "./assets/icons/scissors.png",
    }

    if (jugador1 === jugador2){
        //document.getElementById("jugador").innerHTML = jugador1;
        //document.getElementById("maquina").innerHTML = jugador2;
        document.getElementById("jugador").innerHTML =
            `<img src="${imagenes[jugador1]}" alt="${jugador1}" width="120" class="player1">`;

        document.getElementById("maquina").innerHTML =
            `<img src="${imagenes[jugador2]}" alt="${jugador2}" width="120" class="player2">`;

        //document.getElementById("resultado").innerHTML = "Empate!";
        resultado.innerHTML = "¡Empate!";
        resultado.style.color="#f59e0b";
        return;
    }

    switch (jugador1){
        case "tijeras":
            if (jugador2 === "piedra"){
                //document.getElementById("resultado").innerHTML = "Gana máquina!";
                resultado.innerHTML = "¡Gana máquina!";
                resultado.style.color="#EF4444";
                scoreJugador2++;
                document.getElementById("scoreJugador2").textContent = scoreJugador2;
            }
            else{
                //document.getElementById("resultado").innerHTML = "Gana usuario!";
                resultado.innerHTML = "¡Gana usuario!";
                resultado.style.color="#22C55E";
                scoreJugador1++;
                document.getElementById("scoreJugador1").textContent = scoreJugador1;
            }
            break;

        case "papel":
            if(jugador2 === "tijeras"){
               // document.getElementById("resultado").innerHTML = "Gana máquina!";
                resultado.innerHTML = "¡Gana máquina!";
                resultado.style.color="#EF4444";
                scoreJugador2++;
                document.getElementById("scoreJugador2").textContent = scoreJugador2;
            }
            else{
                //document.getElementById("resultado").innerHTML = "Gana usuario!";
                resultado.innerHTML = "¡Gana usuario!";
                resultado.style.color="#22C55E";
                scoreJugador1++;
                document.getElementById("scoreJugador1").textContent = scoreJugador1;
            }
            break;

        case "piedra":
            if(jugador2 === "papel"){
                //document.getElementById("resultado").innerHTML = "Gana máquina!";
                resultado.innerHTML = "¡Gana máquina!";
                resultado.style.color="#EF4444";
                scoreJugador2++;
                document.getElementById("scoreJugador2").textContent = scoreJugador2;
            }
            else{
                //document.getElementById("resultado").innerHTML = "Gana usuario!";
                resultado.innerHTML = "¡Gana usuario!";
                resultado.style.color="#22C55E";
                scoreJugador1++;
                document.getElementById("scoreJugador1").textContent = scoreJugador1;
            }
            break;

    }
    //document.getElementById("jugador").innerHTML = jugador1;
    //document.getElementById("maquina").innerHTML = jugador2;
    document.getElementById("jugador").innerHTML =
        `<img src="${imagenes[jugador1]}" alt="${jugador1}" width="120">`;

    document.getElementById("maquina").innerHTML =
        `<img src="${imagenes[jugador2]}" alt="${jugador2}" width="120">`;
}

//Disparar eventos
piedra.addEventListener("click", function(){
    jugador1 = "piedra";
    let num = getRandomNum(1,3);
    let jugador2 = playMachine(num);
    playJugador2(jugador2);
});

papel.addEventListener("click", function(){
    jugador1 = "papel";
    let num = getRandomNum(1,3);
    let jugador2 = playMachine(num);
    playJugador2(jugador2);
});

tijeras.addEventListener("click", function(){
    jugador1 = "tijeras";
    let num = getRandomNum(1,3);
    let jugador2 = playMachine(num);
    playJugador2(jugador2);
});

//Permite iniciar luego de la ultima jugada (jugadas totales 5)

/*LIMITE DE JUEGO: el turno máximo es de 5 intentos
Al finalizar el ultimo intento aparece mensaje flotate
en caso pierda para comenzar de nuevo. En caso gane los
5 intentos, mensaje flotante felicitando y agregando
datos del vencedor, colocandolo en una lista de ganadores.
*/



//Testing de cada funcion
//Función Random
for(let i=0;i<10;i++){
    console.log("Random: ",getRandomNum(1,3));
}

//Función playMachine
/*
1 = piedra
2 = papel
3 = tijeras
* */
console.log("Test máquina 1: ",playMachine(1));
console.log("Test máquina 2: ",playMachine(2));
console.log("Test máquina 3: ",playMachine(3));

//Función playJugador2
jugador1 = "piedra";
playJugador2("tijeras"); //debería ganar jugador1
playJugador2("papel"); //debería ganar jugador2
playJugador2("piedra"); //empate