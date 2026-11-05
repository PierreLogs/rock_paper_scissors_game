console.log("Juego de piedra, papel y tijeras\n");

//let jugador1 = prompt("Ingresa un valor: ");


//document.getElementById("piedra").addEventListener("click", function(){console.log("piedra")});
//document.getElementById("papel").addEventListener("click", function(){console.log("papel")});
//document.getElementById("tijeras").addEventListener("click", function(){console.log("tijeras")});


let jugador1;

let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijeras = document.getElementById("tijeras");

/*
piedra.addEventListener("click", function(){
    jugador1 = "piedra";
    console.log("Jugador1 eligió: Piedra");
});

papel.addEventListener("click", function(){
    jugador1 = "papel";
    console.log("Jugador1 eligió: Papel");
});

tijeras.addEventListener("click", function(){
    jugador1 = "tijeras";
    console.log("Jugador1 eligió: Tijeras");
});*



//inciar blucle de juego hasta que el usuario elija terminar

/*Utilizar esta función para devolver los valores de juego aleatorio para maquina.
 1 = piedra, 2 = papel, 3 = tijeras*/

//obtener numero aleatorio entre 2 valores, incluyendo ambos

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

//let num = getRandomNum(1,3);
//var jugador2 = playMachine(num);

//inicio de juego y comparación de respuestas
function playJugador2(jugador2){
    if (jugador1 === jugador2){
        //console.log(`Usted eligio: ${jugador1}`);
        document.getElementById("jugador").innerHTML = jugador1;
        //console.log(`La maquina eligio: ${jugador2}`);
        document.getElementById("maquina").innerHTML = jugador2;
        //console.log("Empate!");
        document.getElementById("resultado").innerHTML = "Empate!";
        return;
    }

    switch (jugador1){
        case "tijeras":
            if (jugador2 === "piedra"){
                //console.log(`Usted eligio: ${jugador1}`);
                //document.getElementById("jugador").innerHTML = jugador1;
                //console.log(`La maquina eligio: ${jugador2}`);
                //document.getElementById("maquina").innerHTML = jugador2;
                //console.log("Gana máquina!");
                document.getElementById("resultado").innerHTML = "Gana máquina!";
            } //else if(jugador2 === "papel"){
            else{
                //console.log(`Usted eligio: ${jugador1}`);
                //document.getElementById("jugador").innerHTML = jugador1;
                //console.log(`La maquina eligio: ${jugador2}`);
                //document.getElementById("maquina").innerHTML = jugador2;
                //console.log("Gana usuario!");
                document.getElementById("resultado").innerHTML = "Gana usuario!";
            }
            break;

        case "papel":
            if(jugador2 === "tijeras"){
                //console.log(`Usted eligio: ${jugador1}`);
                //document.getElementById("jugador").innerHTML = jugador1;
                //console.log(`La maquina eligio: ${jugador2}`);
                //document.getElementById("maquina").innerHTML = jugador2;
                //console.log("Gana usuario!");
                document.getElementById("resultado").innerHTML = "Gana máquina!";
            } //else if(jugador2 === "papel"){
            else{
                //console.log(`Usted eligio: ${jugador1}`);
                //document.getElementById("jugador").innerHTML = jugador1;
                //console.log(`La maquina eligio: ${jugador2}`);
                //document.getElementById("maquina").innerHTML = jugador2;
                //console.log("Gana máquina!");
                document.getElementById("resultado").innerHTML = "Gana usuario!";
            }
            break;

        case "piedra":
            if(jugador2 === "papel"){
                //console.log(`Usted eligio: ${jugador1}`);
                //document.getElementById("jugador").innerHTML = jugador1;
                //console.log(`La maquina eligio: ${jugador2}`);
                //document.getElementById("maquina").innerHTML = jugador2;
                //console.log("Gana usuario!");
                document.getElementById("resultado").innerHTML = "Gana máquina!";
            } //else if(jugador2 === "papel"){
            else{
                //console.log(`Usted eligio: ${jugador1}`);
                //document.getElementById("jugador").innerHTML = jugador1;
                //console.log(`La maquina eligio: ${jugador2}`);
                //document.getElementById("maquina").innerHTML = jugador2;
                //console.log("Gana máquina!");
                document.getElementById("resultado").innerHTML = "Gana usuario!";
            }
            break;

        //default:
            //console.log("Jugada inválida!");
            //document.getElementById("resultado").innerHTML = "Jugada inválida!";
    }
    document.getElementById("jugador").innerHTML = jugador1;
    document.getElementById("maquina").innerHTML = jugador2;
}

//playJugador2(jugador2);

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