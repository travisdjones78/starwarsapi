$.get('/vehicles/get-all-vehicles', data => {
    renderVehicles(data)
})

function renderVehicles(vehicles) {
    vehicles.forEach((vehicle, idx) => {
        $('#vehicles').append(`
       <div class="card col-2 ml-2 mr-2 mt-2 " >
       <img src="./img/vehicles/${vehicle.name}.jpg" class="card-img-top" alt="No image loaded">
       <div class="card-body">
         <h5 class="card-title">${vehicle.name}</h5>
         <a href="./vehicle.html?${vehicle.uid}" class="btn btn-warning">Read More About The ${vehicle.name}</a>
       </div>
     </div>
       `)
    });
}