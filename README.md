# Uso de Callback y Promesas ⏳
Es util el uso de Callback, hasta que nos encontramos con el **Callback Hell**
- el Callback Hel es la anidacion de multiples Callback, el cual provoca mayor dificultad al leer
#### Para esto nacio en ECMScript 6 las Promesas...
- Lo que hace es ejecutar el codigo en "Paralelo", posponiendo la tarea de la promesa hasta que se cumpla.
#### En las Promesas existen diferentes elementos para utilizar ⏰
- Esto permite traer multiples tareas, para ser resueltas, si esque ocurre un fracaso se detiene.
````
Promise.All()
````
- Este metodo `.then()` devuelve una promesa, puede tomar hasta dos argumentos, para casos de exito o fracaso.
````
buscarHeroe('iron').then(console.log);
````
- El uso de `.catch()`, es para manejar los errores, en el caso que ocurra un fracaso, se puede ejecutar el elemento.
`````
buscarHeroe('iron')
            .then(heroe => console.log(heroe))
            .catch(console.warn);
``````
- El metodo `.finally()` es ejecutado siempre que finalize la promesa.
````
).finally(() => console.log('Se termino el Promise.all'));

````
- el elemento `Promise.race()` devuelve el elemento mas rapido en ser ejecutado.
- El `async` transforma una funcion en una **Promesa** (pudiendo usar `return` y `throw`, en vez de `(resolve, reject)`).
- El operador `await` se utiliza para esperar una **Promesa**, y solo se puede usar en una funcion `async` dentro del codigo.
````
const obtenerHeroesArr = async () => {return await Promise.all(heroesIDs.map(buscarHeroeAsync))};
````

#
#
## Cascaron de Webpack

Este es el proyecto inicial para crear aplicaciones con webpack.

### Notas:
 Es necesario reconstruir el Proyecto con los diferentes elementos: 
- Para la reconstruir los modulos de node
````
npm i
````

- Para la construccion del build de desarrollador ⚒️
````
npm run build:dev
````
- Construccion del build de produccion (en el caso de un lanzamiento a produccion) 💻
````
npm run build
````

>  Tabla de diferencias
</br>


| Nombre      | Descripcion |Para|
| ----------- | ----------- | ----------- |
| **build**| Minimizado y facil de leer para el navegador|Producción
| **build:dev**| Facil de leer para el desarrollador|Desarrollador