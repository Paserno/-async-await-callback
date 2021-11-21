

const heroes = {
    iron:{
        nombre: 'Iron Man',
        poder: 'Absurda cantidad de dinero'
    },
    hulk:{
        nombre: 'Hulk',
        poder: 'Absurda cantidad de fuerza'
    },
    spider:{
        nombre: 'Spiederman',
        poder: 'Sentido aracnido y fuerza sobrehumana'
    },
}


export const buscarHeroe = ( id )=> {

    const hereo = heroes[id];

    return new Promise( ( resolve, reject) => {

        if (hereo) {
            resolve( hereo );
        }else{
            reject(`No Existe un heroe con el id ${id}`);
        }

    });

}