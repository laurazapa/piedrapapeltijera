//crear las variables globales
var funciona= true; //variable para si esta activo el "tirar"

var partidas = 0;
var ganadas = 0;
var perdidas = 0;
var empatadas = 0;


function tirar(tiradaJugador){
	//si funciona esta a false, salir de la función sin hacer nada
	if(funciona== false)
		return;

	// crear la matriz de combinaciones
	var resultado= {
		'piedra': {'piedra':0, 'papel':-1, 'tijera':1, 'lagarto':1, 'spock':-1},
		'papel': {'piedra':1, 'papel':0, 'tijera':-1, 'lagarto':-1, 'spock':1},
		'tijera': {'piedra':-1, 'papel':1, 'tijera':0, 'lagarto':1, 'spock':-1},
		'lagarto': {'piedra':-1, 'papel':1, 'tijera':-1, 'lagarto':0, 'spock':1},
		'spock': {'piedra':1, 'papel':-1, 'tijera':1, 'lagarto':-1, 'spock':0}
	}

	//calcular lo que tira CPU
	var tiradaCPU = Math.floor(Math.random()*5);
	var tiradas= ['piedra','papel','tijera','lagarto','spock'];
	tiradaCPU= tiradas[tiradaCPU];

	//actualizar las imagenes elegidas por el jugador y la CPU
	manoJugador.src= 'imagenes/'+tiradaJugador+'.png';
	manoCPU.src= 'imagenes/'+tiradaCPU+'.png';
	
	//hacer las comparaciones
	var resultadoPartida= resultado[tiradaJugador][tiradaCPU];

	//crear un div para el mensaje de si has ganado
	var nuevoDiv= document.createElement('div');
	nuevoDiv.className= "grande";
	var parrafo= document.createElement('p');


	// mostrar los cambios dependiendo del resultado
	if(resultadoPartida==0){
		parrafo.innerHTML = "Has empatado";
		//poner la imagen de empate en el jugador
		imgJugador.src= "imagenes/jugador_normal.jpg";
		//poner la imagen de empate en la CPU
		imgCPU.src= "imagenes/CPU_normal.jpg";
		empatadas++;
	}
	else{
		if(resultadoPartida==1){
			parrafo.innerHTML = "Has ganado!";
			//poner la imagen de victoria en el jugador
			imgJugador.src= "imagenes/jugador_gana.jpg";
			//poner la imagen de derrota en la CPU
			imgCPU.src= "imagenes/cpu_pierde.jpg";
			ganadas++;
		}else{
			parrafo.innerHTML = "Has perdido...";
			//poner la imagen de derrota en el jugador
			imgJugador.src= "imagenes/jugador_pierde.jpg";
			//poner la imagen de victoria en la CPU
			imgCPU.src= "imagenes/cpu_gana.jpg";
			perdidas++;
		}
	}

	//hacer que no funcione el tirar
	funciona= false;

	//colocar el div en el documento y el parrafo en el div
	nuevoDiv.appendChild(parrafo);
	document.body.appendChild(nuevoDiv);
	setTimeout(function(){
		nuevoDiv.remove();
		funciona=true; //volver a activar la función tirar
	},1000); 
	

	//actualizar marcadores
	partidas++;
	outPartidas.innerHTML = partidas;
	outGanadas.innerHTML = ganadas;
	outPerdidas.innerHTML = perdidas;
	outEmpatadas.innerHTML = empatadas;
}