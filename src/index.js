import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeID = 'hulk';

//! Funcion como argumento
buscarHeroe( heroeID, (err, heroe) => {
    if (err) {
        console.error(err);
    } else {
        console.info(heroe);
    }
} );

