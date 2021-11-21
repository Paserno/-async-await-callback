
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

// callback retorna ...al que es llamado en la ID
export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    //! Manejar errores en un callback
    if (heroe) {
        callback(null,heroe);
    }else{
        // un error
        callback(`No Existe un heroe con el id ${id}`);
    }

    // callback(heroe);
}