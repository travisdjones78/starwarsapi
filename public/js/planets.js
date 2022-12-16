$.get('/planets/get-all-planets', data => {
    renderPlanets(data)
})

function renderPlanets(planets) {
    planets.forEach((planet, idx) => {
        $('#planets').append(`
        <div class="card col-2 ml-2 mr-2 mt-2 " >
        <img src="./img/planets/${planet.name} main.jpg" class="card-img-top" alt="No image loaded">
        <div class="card-body">
          <h5 class="card-title">${planet.name}</h5>
          <p class="card-text"></p>
          <a href="./planet.html?${idx}" class="btn btn-sm btn-warning">Read More About The ${planet.name} Planet</a>
        </div>
      </div>
        `)
    });
}
