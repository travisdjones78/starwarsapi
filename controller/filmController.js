let url = 'https://www.swapi.tech/api/films';
const get_all_films = async (req, res) => {
    try {
        fetch(url)
            .then(res => res.json())
            .then(text => {
                return res.status(200).json(text)
            });
    } catch (error) {
        console.log(error)
    }

}

const get_one_film = async (req, res) => {
    const filmId = req.params.filmId
    try {
        fetch(url)
            .then(res => res.json())
            .then(text => {
                const filmData = text.result[filmId].properties
                return res.status(200).json(filmData)
            });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    get_all_films,
    get_one_film
}
