const url = 'http://pokeapi.co/api/v2/'

// These variables will work with the search form to pull the value of what was searched
const search = document.querySelector('.pokedexsearch')
const nameQuery = document.querySelector('.searchvalue')
const pokemonName = document.querySelector('.pokemonname')
const pokemonSprite = document.querySelector('.pokemonsprite')
const pokemonInfo = document.querySelector('.pokemoninfo')

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
    })
}

search.addEventListener('submit', searchPokedex)
