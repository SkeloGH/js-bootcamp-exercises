 const mapa = [
        ['hidra', null, null,'cerbero',null,],
        [null, null, null,null,null,],
        [null, 'orco', null,'ogro',null,],
        [null, null, null,null,null,],
        [null, null, 'medusa',null,null,],
    ];

    const aventurero = {
        nombre: "Link",
        equipo: 'azul',
        experiencia: 0,
        inventario: [
            {
                nombre: 'Mataogros',
                material: 'acero valirio',
                tipo: 'espada'
            },
            {
                nombre: 'Escudo del Sol',
                material: 'plata',
                tipo: 'escudo'
            },
        ],
        stats: {
            fuerza: 10,
            int: 5,
            agilidad: 0,
            magia: 20
        },
    };


var coordenada_x = window.prompt(aventurero.nombre + ' ataca la coordenada');
var coordenada_y = window.prompt(aventurero.nombre + ' ataca la coordenada');

if (mapa[coordenada_x][coordenada_y] === null) {

  window.alert('Link no encuentra nada en esas coordenadas')
  
} else { window.alert(aventurero.nombre + ' encuentra a ' + mapa[coordenada_x][coordenada_y]);


};


window.alert(aventurero.nombre + ' ataca a ' +  mapa[coordenada_x][coordenada_y] +  '  con su  ' 
    +  aventurero.inventario[0].tipo + ' de ' +  aventurero.inventario[0].material 
    +   aventurero.inventario[0].nombre + ' y su ' +  aventurero.inventario[1].nombre 
    + ' de ' +  aventurero.inventario[1].material);

var el_inventario = aventurero.inventario;

console.log(el_inventario[0]);

el_inventario[0].nombre = 'Jesus de Veracruz';



    

    /*
        Link ataca las cordenadas [0,0] y encuentra hidra,
        la ataca con su espada de acero valirio "Mataogros", su escudo  de plata "Escudo del Sol"

        Instrucciones:
        1. Window prompt que pida coordenadas [],[]
        2. Encontrar la hidra con la coordenada
        3. Link ataca a hidra con su espada de acero valirio "Mataogros"

    */


