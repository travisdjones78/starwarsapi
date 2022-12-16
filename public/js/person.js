const personId = location.search.split('?')[1]
$.get(`/people/get-one-person/${personId}`, data => {
    renderOnePerson(data)
})

function renderOnePerson(person) {
    $('#personImg').attr('src', `img/characters/${person.name}.jpg`)
    $('#person').append(`${person.name}`)
    $('#birth').append(`${person.birth_year}`)
    $('#height').append(`${person.height}`)
    $('#hair').append(`${person.hair_color}`)
    $('#skin').append(`${person.skin_color}`)
    $('#eyes').append(`${person.eye_color}`)
    $('#gender').append(`${person.gender}`)
}

$.get(`/planets/get-one-planet/${personId}`, data => {
    $('#homeworld').append(`${data.name}`)
})