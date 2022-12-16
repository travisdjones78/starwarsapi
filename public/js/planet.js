const planetId = location.search.split('?')[1]
$.get(`/planets/get-one-planet/${planetId}`, data => {
    renderOnePlanet(data)
})

function renderOnePlanet(planet) {
    $('#planetImg').attr('src', `img/planets/${planet.name}.jpg`)
    $('#planet').append(`${planet.name}`)
    $('#climate').append(`${planet.climate}`)
    $('#diameter').append(`${planet.diameter}`)
    $('#orbit').append(` ${planet.orbital_period}`)
    $('#rotation').append(`${planet.rotation_period} `)
    $('#gravity').append(`${planet.gravity}`)
    $('#water').append(`${planet.surface_water}`)
    $('#terrain').append(`${planet.terrain}`)
    $('#population').append(`${planet.population}`)
}