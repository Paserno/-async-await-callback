

const heroes = {
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    hulk: {
        nombre: 'Hulk',
        poder: 'Absurda cantidad de fuerza'
    },
    spider: {
        nombre: 'Spiederman',
        poder: 'Sentido aracnido y fuerza sobrehumana'
    },
}


export const buscarHeroe = (id) => {

    const hereo = heroes[id];

    return new Promise((resolve, reject) => {

        if (hereo) {
            setTimeout(() => resolve(hereo), 1000);
        } else {
            reject(`No Existe un heroe con el id ${id}`);
        }

    });
}
//! async, crea una Promesa, pero en vez de usar el parametro "resolve" y "reject", usaremos en la primera opcion un "return" y en la segunda opcion para manejar los errores "throw".
export const buscarHeroeAsync = async (id) => {

    const hereo = heroes[id];

    if (hereo) {
        return hereo;
    } else {
        throw `No Existe un heroe con el id ${id}`;
    }


}


const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}