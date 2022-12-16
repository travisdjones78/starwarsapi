const speciesId = location.search.split('?')[1]
$.get(`/species/get-one-species/${speciesId}`, data => {
    renderOneSpecies(data)
})

function renderOneSpecies(species) {
    $('#speciesImg').attr('src', `img/species/${species.name}.jpg`)
    $('#species').append(`${species.name}`)
    $('#designation').append(`${species.designation}`)
    $('#classification').append(`${species.classification}`)
    $('#lifespan').append(`${species.average_lifespan}`)
    $('#language').append(`${species.language}`)
    $('#hair').append(`${species.hair_colors}`)
    $('#eyes').append(`${species.eye_colors}`)
    $('#skin').append(`${species.skin_colors}`)
    $('#height').append(`${species.average_height}`)
    $('#peopleLabel').append(`
    These People Are Also ${species.name}:`)
    species.people.forEach(person => { getPeople(person) })
}

$.get(`/planets/get-one-planet/${speciesId + 1}`, data => {
    $('#homeworld').append(`${data.name}`)
})

function getPeople(person) {
    const personId = +person.split('/')[5] - 1
    $.get(`/people/get-one-person/${personId}`, data => {
        $('#people').append(`
        <li>${data.name}</li>
        `)
    })
}