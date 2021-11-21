//? Callback hell, es la anidacion de muchos callback "dificil de leer"
import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeID1 = 'spider';
const heroeID2 = 'iron';
const heroeID3 = 'hulk';

//! Funcion como argumento
buscarHeroe(heroeID1, (err, heroe1) => {
    if (err) { return console.error(err); }

    buscarHeroe(heroeID2, (err, heroe2) => {

        if (err) { return console.error(err); }
        console.log(`Eviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    

    });
});

