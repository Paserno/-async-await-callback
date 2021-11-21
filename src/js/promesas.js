

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


const  promesaLenta = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const  promesaMedia = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const  promesaRapida = new Promise((resolve,reject)=>{
    setTimeout(() => reject('Promesa Rapida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}