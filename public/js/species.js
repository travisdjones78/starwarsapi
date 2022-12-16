$.get('/species/get-all-species', data => {
    renderSpecies(data)
})

function renderSpecies(species) {
    console.log(species)
    species.forEach((species) => {
        $('#species').append(`
        <div class="card col-2 ml-2 mr-2 mt-2 " >
        <img src="./img/species/${species.name}.jpg" class="card-img-top" alt="No image loaded">
        <div class="card-body">
          <h5 class="card-title">${species.name}</h5>
          <p class="card-text"></p>
          <a href="./oneSpecies.html?${species.uid}" class="btn btn-sm btn-warning">Read More About The ${species.name} Species</a>
        </div>
      </div>
        `)
    });
}
