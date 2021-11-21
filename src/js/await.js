import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIDs = ['iron', 'hulk', 'spider'];
const heroesPromesas = heroesIDs.map(buscarHeroe);
// const heroesPromesas = heroesIDs.map(id => buscarHeroe(id));


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
        return {
            nombre: 'Sin nombre',
            poder: 'No tengo'
        };
    }
}

export const heroesCiclo = async () => {

console.time(`heroesCiclo`);

for await( const heroe of heroesPromesas){
    console.log(heroe);
}




console.timeEnd(`heroesCiclo`);
// const heroes = await Promise.all(heroesPromesas);
// heroes.forEach(heroe => console.log(heroe));

}
export const heroeIfAwait = async(id) =>{

    if ((await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos');
    }else{
        console.log('meeeh');

    }


}