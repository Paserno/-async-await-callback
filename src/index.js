//? Callback hell, es la anidacion de muchos callback "dificil de leer"
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeID1 = 'spider';
const heroeID2 = 'iron';

//! Funcion como argumento
// buscarHeroe(heroeID1, (err, heroe1) => {
//     if (err) { return console.error(err); }

//     buscarHeroe(heroeID2, (err, heroe2) => {

//         if (err) { return console.error(err); }
//         console.log(`Eviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    

//     });
// });

buscarHeroe(heroeID1).then( heroe => {

    console.log(`Eviando a ${heroe.nombre} a la mision`)
});


console.log('Fin del Programa');