const url = 'http://pokeapi.co/api/v2/'

// These variables will work with the search form to pull the value of what was searched
const search = document.querySelector('.pokedexsearch')
const nameQuery = document.querySelector('.searchvalue')
const pokemonName = document.querySelector('.pokemonname')
const pokemonSpriteFront = document.querySelector('.pokemonspritefront')
const pokemonSpriteBack = document.querySelector('.pokemonspriteback')
const pokemonInfo = document.querySelector('.pokemoninfo')
const pokemonHeight = document.querySelector('.pokemonheight')
const pokemonWeight = document.querySelector('.pokemonweight')
const abilitiesHeader = document.querySelector('.abilitiesheader')
const pokemonTypes = document.querySelector('.pokemontypes')
// This is the function that runs when the Search button is clicked, users will search for Pokemon by name
function searchPokedex (e) {
  e.preventDefault()
  console.log('Search was clicked')
  console.log(nameQuery.value)

  fetch(`${url}pokemon/${nameQuery.value}`)
    .then(function (res) {
      console.log(res)
      return res.json()
    })
    .then(function (pokemon) {
      console.log(pokemon)
      pokemonName.innerText = pokemon.name
      pokemonSpriteFront.src = pokemon.sprites.front_default
      pokemonSpriteBack.src = pokemon.sprites.back_default
      pokemonHeight.innerText = `Height: ${pokemon.height}'`
      pokemonWeight.innerText = `Weight: ${pokemon.weight}lbs`
      abilitiesHeader.innerText = 'Abilities'

      for (let i = 0; i < pokemon.types.length; i++) {
        let type = document.createElement('p')
        type.innerHTML = pokemon.types[i].type.name
        pokemonTypes.appendChild(type)
      }

      while (pokemonInfo.hasChildNodes()) {
        pokemonInfo.removeChild(pokemonInfo.firstChild)
      }

      for (let i = 0; i < pokemon.abilities.length; i++) {
        let ability = document.createElement('p')
        ability.innerHTML = pokemon.abilities[i].ability.name
        pokemonInfo.appendChild(ability)
      }
    })
}

search.addEventListener('submit', searchPokedex)
