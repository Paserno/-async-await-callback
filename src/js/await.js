import { buscarHeroeAsync } from "./promesas";

const heroesIDs = ['iron', 'hulk', 'spider'];


export const obtenerHeroesArr = async () => {
    return await Promise.all(heroesIDs.map(buscarHeroeAsync));
    /* //? equivalente
    *   const heroesArr = [];
        
    *  for (const id of heroesIDs) {
    *        ////buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
    *        const heroe = await buscarHeroeAsync(id);
    *        heroesArr.push(heroe);
        }
    *    return await heroesArr;
    */
};

export const obtenerHeroesAwait = async (id) => {

    try {

        const heroe = await buscarHeroeAsync(id);
        return heroe;

    } catch (err) {
        console.log('CATCH!!!');
        return{
            nombre: 'Sin nombre',
            poder: 'No tengo'
        }

    }


}