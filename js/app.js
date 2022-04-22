const flex = document.querySelector('.flex')
const template = document.getElementById('card').content
const clone = template.cloneNode(true)
const fragment = document.createDocumentFragment()

/**
 * Genera un numero aleatorio basado en el rango de numeros
 * recibido entre los parametros min y max
 *
 * @param {number} min
 * @param {number} max
 * @returns
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Agrega un evento al navegador para que identifique cuando
 * se cargaron los elementos y cargue la información en las cards
 */
document.addEventListener("DOMContentLoaded", () => {
    const ramdomNumber = getRandomInt(1, 152)

    // Obtiene el identificador aleatorio de un pokemon para mostrarlo
    // en la tarjeta existente
    fetchData(ramdomNumber).then(pokemon => {
        showCard(pokemon);

        // Identificador de pikachu
        const challengeNumber = 25;

        // Muestra la información del pokemon seleccionado en la segunda tarjeta
        // Para este ejemplo específico, se asigna el identificador de pikachu
        return fetchData(challengeNumber).then(pokemon => {
            iChooseYou(pokemon)
        }, error => {
            console.log(error)
        })
    });

})

/**
 * Obtiene los datos del api de Pokemon de acuerdo al numero
 * del pokemon que se desee mostrar en la tarjeta
 *
 * @param {number} id
 */
const fetchData = async (id) => {
    try {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        const pokemon = {
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            imgJuego: data.sprites.front_default,
            imgCvg: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            experiencia: data.base_experience,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat,
        }
        return pokemon

    } catch (error) {
        console.log(error)
    }
}

const showCard = pokemon => {
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgCvg)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`
    clone.querySelector('.card-body-text').textContent = pokemon.experiencia + ' exp'
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque + 'K'
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial + 'K'
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa + 'K'
}


const iChooseYou = pokemon => {
    const el = clone.querySelector('.card-miPokemon');

    if (el === null) {
        printCardsInDOM();
        return false;
    }

    clone.querySelector('.card-miPokemon-body-img').setAttribute('src', pokemon.imgCvg)
    clone.querySelector('.card-miPokemon-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`
    clone.querySelector('.card-miPokemon-body-text').textContent = pokemon.experiencia + ' exp'
    clone.querySelectorAll('.card-miPokemon-footer-social h3')[0].textContent = pokemon.ataque + 'K'
    clone.querySelectorAll('.card-miPokemon-footer-social h3')[1].textContent = pokemon.especial + 'K'
    clone.querySelectorAll('.card-miPokemon-footer-social h3')[2].textContent = pokemon.defensa + 'K'

    printCardsInDOM();
}

function printCardsInDOM() {
    fragment.appendChild(clone)
    flex.appendChild(fragment)
}
