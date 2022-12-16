let url = 'https://www.swapi.tech/api/starships';

const get_all_starships = async (req, res) => {
    try {
        fetch(url)
            .then(res => res.json())
            .then(text => {
                const starshipsData = text.results
                return res.status(200).json(starshipsData)
            });
    } catch (error) {
        console.log(error)
    }
}

const get_one_starship = async (req,res)=>{
    const starshipId = +req.params.starshipId
    try {
        fetch(`${url}/${starshipId}`)
            .then(res => res.json())
            .then(text => {
                const starshipData = text.result.properties
                return res.status(200).json(starshipData)
            });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get_all_starships,
    get_one_starship
}