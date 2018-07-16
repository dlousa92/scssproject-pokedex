const url = 'http://pokeapi.co/api/v2/'

const search = document.querySelector('.pokedexsearch')
const name = document.querySelector('.searchvalue')

function updateField (e) {
  e.preventDefault()
}

function searchPokedex (e) {
  e.preventDefault()
  console.log('Search was clicked')

  fetch(`${url}pokemon/${name}`)
    .then(function (res) {
      console.log(res)
      return res.json()
    })
    .then(function (pokemon) {
      console.log(pokemon)
    })
}

name.addEventListener('onChange', updateField)
search.addEventListener('submit', searchPokedex)
