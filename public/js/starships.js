$.get('/starships/get-all-starships', data => {
    renderStarships(data)
})

function renderStarships(starships) {
    console.log(starships)
    starships.forEach((starship) => {
        $('#starships').append(`
        <div class="card col-2 ml-2 mr-2 mt-2 " >
        <img src="./img/starships/${starship.name}.jpg" class="card-img-top" alt="No image loaded">
        <div class="card-body">
          <h5 class="card-title">${starship.name}</h5>
          <p class="card-text"></p>
          <a href="./starship.html?${starship.uid}" class="btn btn-sm btn-warning">Read More About The ${starship.name} Species</a>
        </div>
      </div>
        `)
    });
}