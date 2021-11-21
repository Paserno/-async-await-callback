import { obtenerHeroesArr } from "./js/await";


console.time('await');
obtenerHeroesArr().then(heroe => {console.table(heroe)
console.timeEnd('await');
});


