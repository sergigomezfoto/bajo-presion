# Component `planetAnimation`

El component `planetAnimation` és una funció que permet crear una animació d'etiquetes al voltant d'un "planeta" en forma de disc. Les etiquetes es distribueixen equitativament al voltant del planeta i giren a mesura que el planeta rota.

## Ús

Per utilitzar el component `planetAnimation`, segueix aquests passos:

1. Inclou l'arxiu JavaScript que conté el codi del component a la teva pàgina web.
2. Crea un contenidor al teu HTML on es mostrarà l'animació. Assigna un ID únic a aquest contenidor.
3. Defineix les etiquetes que es mostraran al voltant del planeta. Assigna una classe comuna a totes les etiquetes.
4. Crea un element HTML per representar el "planeta". Assigna un ID únic a aquest element.
5. Configura les opcions del component en un objecte JavaScript.
6. Crida la funció `planetAnimation` passant les opcions com a argument.

```javascript
const options = {
  containerId: "planet-wrapper",
  labelsClass: "label",
  littleplanetId: "littleplanet",
  speed: 0.05,
  initialAngles: [0, 1.26, 2.51, 3.77, 5.03],
  initialRadius: [350, 400, 400, 400, 300],
  breakpoint: 1200,
  reductionFactor: 0.75,
};

planetAnimation(options);
```
## Opcions
El component `planetAnimation` accepta les següents opcions:

* containerId (string): ID de l'element contenidor on es mostrarà l'animació. 
* labelsClass (string): Classe comuna assignada a totes les etiquetes que es mostraran al voltant del planeta. 
* littleplanetId (string): ID de l'element que representa el "planeta". Requerit.
* speed (number): Velocitat de rotació de l'animació. 
* initialAngles (array): Llista d'angles inicials per a cada etiqueta en radians. El nombre d'angles ha de coincidir amb el nombre d'etiquetes. 
* initialRadius (array): Llista de radis inicials per a cada etiqueta en píxels. El nombre de radis ha de coincidir amb el nombre d'etiquetes. 
* breakpoint (number): Valor d'amplada de pantalla en píxels en què s'activarà el canvi de mida i posició en pantalles petites. Si s'estableix a null, aquesta funcionalitat es desactiva. 
* reductionFactor (number): Factor de reducció de mida i posició en pantalles petites. 

## Requisits


El component planetAnimation requereix que s'inclogui l'arxiu JavaScript que contingui la seva implementació a la teva pàgina web abans del seu ús. Assegura't de tenir accés a l'arxiu i d'incloure'l al teu projecte.

A més a més, es requereixen els següents requisits a la teva pàgina web:

html:
```html
 <div id="planet-wrapper">
        <div class="label">Etiqueta 1</div>
        <div class="label">Etiqueta 2</div>
        <div class="label">Etiqueta 3</div>
        <div class="label">Etiqueta 4</div>
        <div class="label">Etiqueta 5</div>
        <div id="littleplanet"></div>
    </div>
```
css:
```css
#planet-wrapper {

    width: 1px;
    height: 1px;
    display: block;
}

#littleplanet {
    position: relative;
    width: 726px;
    height: 726px;
    background: url(littleplanet.png) no-repeat center center;
    background-size: cover;
    margin: auto;
    display: block;
    top: -363px;
    right: 363px;
}


.label {
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    font-family: Arial, sans-serif;
    font-size: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 4px;
    border-radius: 4px;
    transform-origin: bottom center;
    pointer-events: none;
    will-change: transform;
}
```