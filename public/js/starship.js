const starshipId = location.search.split('?')[1]
$.get(`/starships/get-one-starship/${starshipId}`, data => {
    renderStarship(data)
})

function renderStarship(starship) {
    $('#starshipImg').attr('src', `img/starships/${starship.name}.jpg`)
    $('#model').append(`${starship.name}`)
    $('#manufacturer').append(`${starship.manufacturer}`)
    $('#speed').append(`${starship.max_atmosphering_speed}`)
    $('#passenger').append(`${starship.passengers}`)
    $('#cargo').append(`${starship.cargo_capacity}`)
    $('#hyperdrive').append(`${starship.hyperdrive_rating}`)
    $('#crew').append(`${starship.crew}`)
    $('#credits').append(`${starship.cost_in_credits}`)
}