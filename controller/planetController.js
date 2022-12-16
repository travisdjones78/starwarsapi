let url = 'https://www.swapi.tech/api/planets';

const get_all_planets = async (req, res) => {
    try {
        fetch(url)
            .then(res => res.json())
            .then(text => {
                const planetData = text.results
                return res.status(200).json(planetData)
            });
    } catch (error) {
        console.log(error)
    }
}

const get_one_planet = async (req,res)=>{
    const planetId = +req.params.planetId 
    try {
        fetch(`${url}/${planetId}`)
            .then(res => res.json())
            .then(text => {
                const planetData = text.result.properties
                return res.status(200).json(planetData)
            });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get_all_planets,
    get_one_planet
}