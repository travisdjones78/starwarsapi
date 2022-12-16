$.get('/people/get-all-people', data => {
    renderPeople(data)
})

function renderPeople(people) {
    people.forEach((person, idx) => {
        $('#people').append(`
            <div class="card col-2 ml-2 mr-2 mt-2 " >
            <img src="./img/characters/${person.name}.jpg" class="card-img-top" alt="No image loaded">
            <div class="card-body">
              <h5 class="card-title">${person.name}</h5>
              <p class="card-text"></p>
              <a href="./person.html?${idx}" class="btn btn-sm btn-warning">Read More About ${person.name}</a>
            </div>
          </div>
            `)
    });
}
