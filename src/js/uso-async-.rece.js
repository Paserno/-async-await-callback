// import { promesaLenta, promesaMedia, promesaRapida} from './js/promesas';
import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

// promesaLenta.then(mensaje => console.log(mensaje));
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);
/*
//? Promise.race(), devuelve el elemento mas rapido que se ejecute, ignorando los demas
*Promise.race([ promesaLenta, promesaMedia, promesaRapida])
*        .then(console.log)
*        .catch(console.warn);
*/

buscarHeroe('iron')
            .then(heroe => console.log(heroe))
            .catch(console.warn);
buscarHeroeAsync('spider')
            .then(heroe => console.log(heroe))
            .catch(console.warn);



