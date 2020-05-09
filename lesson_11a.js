//ARREGLOS ANIDADOS
/*

const alexArray = ['foo'];

const aaronArray = ['bar', 'yet'];

alexArray[1] = aaronArray;

console.log(alexArray);

console.log(alexArray[1][1]);


//TIC TAC TOE GAME 

 Crear una cuadricula de 3 x 3 

*/

const elsaArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],

];

console.log(elsaArray);

//Window.prompt, pedir las coordenadas a la persona y nosotros escribiremos la x o y en la posicion correspondiente


var x_or_o = window.prompt('Enter x or o');

elsaArray[window.prompt('Input value')][window.prompt('Input value')] = x_or_o;


/* 
console.log(elsaArray[2][1]);

elsaArray[0][0] = window.prompt('Input value');
elsaArray[0][1] = window.prompt('Input value');
elsaArray[0][2] = window.prompt('Input value');
elsaArray[1][0] = window.prompt('Input value');
elsaArray[1][1] = window.prompt('Input value');
elsaArray[1][2] = window.prompt('Input value');
elsaArray[2][0] = window.prompt('Input value');
elsaArray[2][1] = window.prompt('Input value');
elsaArray[2][2] = window.prompt('Input value');

console.log(elsaArray);

Alex code

 const alexArray = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    
    const jugador = window.prompt('Jugador en turno (o/y):');
    const x = window.prompt('Coordenada X:');
    const y = window.prompt('Coordenada Y:');

    alexArray[x][y] = jugador;

    console.log(alexArray);
*/






