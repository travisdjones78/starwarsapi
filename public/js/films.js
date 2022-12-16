$.get('/films/get-all-films', data => {
    renderFilms(data)
})

 function renderFilms(basePath) {
    const filmPath = basePath.result
    filmPath.forEach((name) => {
        const property = name.properties
        let summary = `${property.opening_crawl.slice(0, 100)}......`
        $('#films').append(`
        <div class="card col-2 ml-2 mr-2 mt-2 " >
        <img src="./img/films/${property.title} theatrical.jpeg" class="card-img-top" alt="No image loaded">
        <div class="card-body">
          <h5 class="card-title">${property.title}</h5>
          <p class="card-text">${summary}</p>
          <a href="./film.html?${name.uid}" class="btn btn-warning">Read More About ${property.title}</a>
        </div>
      </div>
    `)
    });
}


let img = Math.floor(Math.random() * 7)
let imgPath = '';
switch (img) {
    case 0:
        imgPath = 'A New Hope.jpg'
        break;
    case 1:
        imgPath = 'Attack of the Clones.jpg'
        break;
    case 2:
        imgPath = 'Return of the Jedi.jpg'
        break;
    case 3:
        imgPath = 'Revenge of the Sith.jpg'
        break;
    case 4:
        imgPath = 'The Empire Strikes Back.jpg'
        break;
    case 5:
        imgPath = 'The Phantom Menace.jpg'
        break;

    default:
        imgPath = 'Star Wars.jpg'
        break;
}
$('#logoImg').attr('src',`./img/logos/${imgPath}`)
