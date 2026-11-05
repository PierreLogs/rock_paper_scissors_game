console.log("Juego de piedra, papel y tijeras\n");

let jugador1;

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
    if (jugador1 === jugador2){
        document.getElementById("jugador").innerHTML = jugador1;
        document.getElementById("maquina").innerHTML = jugador2;
        document.getElementById("resultado").innerHTML = "Empate!";
        return;
    }

    switch (jugador1){
        case "tijeras":
            if (jugador2 === "piedra"){
                document.getElementById("resultado").innerHTML = "Gana máquina!";
            }
            else{
                document.getElementById("resultado").innerHTML = "Gana usuario!";
            }
            break;

        case "papel":
            if(jugador2 === "tijeras"){
                document.getElementById("resultado").innerHTML = "Gana máquina!";
            }
            else{
                document.getElementById("resultado").innerHTML = "Gana usuario!";
            }
            break;

        case "piedra":
            if(jugador2 === "papel"){
                document.getElementById("resultado").innerHTML = "Gana máquina!";
            }
            else{
                document.getElementById("resultado").innerHTML = "Gana usuario!";
            }
            break;

    }
    document.getElementById("jugador").innerHTML = jugador1;
    document.getElementById("maquina").innerHTML = jugador2;
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