import { obtenerHeroesArr, obtenerHeroesAwait } from "./js/await";

console.time('await');

obtenerHeroesAwait('iron2')
    .then(heroe => {
        console.log(heroe);
        console.timeEnd('await');
    }).catch(console.warn);


