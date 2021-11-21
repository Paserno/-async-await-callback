import { buscarHeroeAsync } from "./promesas";

const heroesIDs = [ 'iron', 'hulk', 'spider'];


export const obtenerHeroesArr = async() => {

    const heroesArr = [];
    
    for (const id of heroesIDs) {
        //buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }
        
   

    return heroesArr;
};