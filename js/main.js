console.log("Juego de piedra, papel y tijeras\n");

let jugador1 = "piedra";

//inciar blucle de juego hasta que el usuario elija terminar

//Utilizar esta función para devolver los valores de juego aleatorio para maquina.
// 1 = piedra, 2 = papel, 3 = tijeras

//obtener numero aleatorio entre 2 valores, incluyendo ambos
function getRandomNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1))+min;
}

//asignación de restultados con retorno en strings
function playMachine(maquina){
    if (maquina == 1) {
        return "piedra";
    } else if (maquina == 2){
        return "papel";
    } else if (maquina == 3){
        return "tijeras";
    }
}

let num = getRandomNum(1,3);
var jugador2 = playMachine(num);

//inicio de juego y comparación de respuestas
function playJugador2(jugador2){
    if (jugador1 === jugador2){
        console.log(`Usted eligio: ${jugador1}`);
        console.log(`La maquina eligio: ${jugador2}`);
        console.log("Empate!");
    }

    switch (jugador1){
        case "tijeras":
            if (jugador2 === "piedra"){
                console.log(`Usted eligio: ${jugador1}`);
                console.log(`La maquina eligio: ${jugador2}`);
                console.log("Gana máquina!");
            } else if(jugador2 === "papel"){
                console.log(`Usted eligio: ${jugador1}`);
                console.log(`La maquina eligio: ${jugador2}`);
                console.log("Gana usuario!");
            }
            break;

        case "papel":
            if(jugador2 === "piedra"){
                console.log(`Usted eligio: ${jugador1}`);
                console.log(`La maquina eligio: ${jugador2}`);
                console.log("Gana usuario!");
            } else if(jugador2 === "tijeras"){
                console.log(`Usted eligio: ${jugador1}`);
                console.log(`La maquina eligio: ${jugador2}`);
                console.log("Gana máquina!");
            }
            break;

        case "piedra":
            if(jugador2 === "tijeras"){
                console.log(`Usted eligio: ${jugador1}`);
                console.log(`La maquina eligio: ${jugador2}`);
                console.log("Gana usuario!");
            } else if(jugador2 === "papel"){
                console.log(`Usted eligio: ${jugador1}`);
                console.log(`La maquina eligio: ${jugador2}`);
                console.log("Gana máquina!");
            }
            break;

        default:
            console.log("Jugada inválida!");
    }
}

playJugador2(jugador2);