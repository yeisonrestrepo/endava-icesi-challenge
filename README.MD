# Pokemon Card Challenge

Este proyecto se encarga de presentar al usuario una tarjeta pokemon generada al azar, la tarjeta se va a cambiar cada vez que se refresque la ventana del navegador, presentando así una imágen y las diferentes características del pokemon.

## Reto

Para este reto se solicita que se cree una segunda tarjeta pokemon, de manera que se muestre la tarjeta pokemon aleatoria que actualmente existe y otra tarjeta adicional que muestre al pokemon "pikachu", el cuál ya está se encuentra configurado en los archivos del proyecto.

### Resultado esperado

![Resultado esperado](/images/resultadoEsperado.png)

## Estructura de una tarjeta pokemon

```html
<article class="card">
    <img src="./images/bg-pattern-card.svg" alt="imagen header card" class="card-header">
    <div class="card-body">
        <img src="./images/endava.png" alt="imagen de vitoko" class="card-body-img">
        <h1 class="card-body-title">
            Pokemon 1
            <span>26</span>
        </h1>
        <p class="card-body-text">London</p>
    </div>
    <div class="card-footer">
        <div class="card-footer-social">
            <h3>80K</h3>
            <p>Ataque</p>
        </div>
        <div class="card-footer-social">
            <h3>803K</h3>
            <p>Ataque Especial</p>
        </div>
        <div class="card-footer-social">
            <h3>1.4K</h3>
            <p>Defensa</p>
        </div>
    </div>
</article>
```

## Herramientas a emplear en la solucion del challenge

El proyecto ya se encuentra configurado para mostrar una segunda tarjeta pokemon, sin embargo, para lograr el objetivo es necesario modificar brevemente la estructura de una tarjeta.

Estas modificaciones le permitirán al proyecto identificar que existe una segunda tarjeta con unas
características predefinidas que permitirán presentar en la pantalla la tarjeta de Pikachu.

### HTML y Clases CSS

Debes crear la estructura de una tarjeta pokemon e implentar de forma correcta dentro de dicha estructura, el siguiente listado de clases css:

- card-miPokemon
- card-miPokemon-header
- card-miPokemon-body
- card-miPokemon-body-img
- card-miPokemon-body-title
- card-miPokemon-body-text
- card-miPokemon-footer
- card-miPokemon-footer-social