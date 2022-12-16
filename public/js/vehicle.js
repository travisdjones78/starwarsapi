const vehicleId = location.search.split('?')[1]
$.get(`/vehicles/get-one-vehicle/${vehicleId}`, data => {
    renderOneVehicle(data)
})

function renderOneVehicle(vehicle) {
    $('#vehicleImg').attr('src', `./img/vehicles/${vehicle.name}.jpg`)
    $('#model').append(`${vehicle.name}`)
    $('#manufacturer').append(`${vehicle.manufacturer}`)
    $('#speed').append(`${vehicle.max_atmosphering_speed}`)
    $('#passenger').append(`${vehicle.passengers}`)
    $('#cargo').append(`${vehicle.cargo_capacity}`)
    $('#crew').append(`${vehicle.crew}`)
    $('#credits').append(`${vehicle.cost_in_credits}`)
}