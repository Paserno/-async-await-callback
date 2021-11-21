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
//! ----------------------------------Resumir----------------------------------
// buscarHeroe(heroeID1).then( heroe1 => {
//      console.log(`Eviando a ${heroe.nombre} a la mision`)
//     buscarHeroe(heroeID2).then(heroe2 =>{
//         console.log(`Eviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     })
// });
//!----------------------------------------------------------------------------
Promise.all([buscarHeroe(heroeID1), buscarHeroe(heroeID2)])
    .then(([heroe1,heroe2])=>{

    
    console.log(`Eviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

});


console.log('Fin del Programa');