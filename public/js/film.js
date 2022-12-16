const filmId = location.search.split('?')[1]
$.get(`/films/get-one-film/${filmId}`, data => {
    renderOneFilm(data)
})

function renderOneFilm(film) {
    const date = film.release_date
    const splitDate = date.split('-')
    const day = splitDate[2]
    const month = splitDate[1]
    const year = splitDate[0]

    $('#filmImg').attr('src', `./img/films/${film.title} poster.jpeg`)
    $('.title').append(`${film.title}`)
    $('#episode').append(`
    <div class="text-muted display-5">
   Episode # ${film.episode_id}
    </div>
    `)
    $('#summary').append(`${film.opening_crawl}`)
    $('#director').append(`This film was directed by ${film.director}.`)
    $('#producer').append(`This film was produced by ${film.producer}`)
    $('#released').append(`It was released on ${month} ${day} ${year}.`)
    $('#logoImg').attr('src', `img/logos/${film.title}.jpg`)
    film.characters.forEach(character => { getCharacters(character) });
    film.planets.forEach(planet => { getPlanets(planet) })
    film.species.forEach(species => { getSpecies(species) })
    film.starships.forEach(starship => { getStarships(starship) })
    film.vehicles.forEach(vehicle => { getVehicles(vehicle) })
}

function getCharacters(character) {
    const characterId = character.split('/')[5]
    $.get(`/people/get-one-person/${characterId}`, data => {
        $('#characters').append(`
        <li>
        ${data.name}
        </li>
   `)
    })
}

function getPlanets(planet) {
    const planetId = +planet.split('/')[5]
    $.get(`/planets/get-one-planet/${planetId}`, data => {
        $('#planets').append(`
       <li>
       ${data.name}
       </li>
        `)
    })
}

function getSpecies(species) {
    const speciesId = +species.split('/')[5]
    $.get(`/species/get-one-species/${speciesId}`, data => {
        $('#species').append(`
        <li>
        ${data.name}
        </li>
        `)
    })
}

function getStarships(starship) {
    const starshipId = +starship.split('/')[5]
    $.get(`/starships/get-one-starship/${starshipId}`, data => {
        $('#starships').append(`
        <li>
        ${data.name}
        </li>
        `)
    })
}

function getVehicles(vehicle) {
    const vehicleId = +vehicle.split('/')[5]
    $.get(`/vehicles/get-one-vehicle/${vehicleId}`, data => {
        $('#vehicles').append(`
       <li>
       ${data.model}
       </li>
        `)
    })
}