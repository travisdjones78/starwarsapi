let url = 'https://www.swapi.tech/api/species';

const get_all_species = async (req,res)=>{
    try {
        fetch(url)
            .then(res => res.json())
            .then(text => {
                const specieData = text.results
                return res.status(200).json(specieData)
            });
    } catch (error) {
        console.log(error)
    }
}

const get_one_species = async (req,res)=>{
    const speciesId = +req.params.speciesId
    try {
        fetch(`${url}/${speciesId}`)
            .then(res => res.json())
            .then(text => {
                const speciesData = text.result.properties
                return res.status(200).json(speciesData)
            });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get_all_species,
    get_one_species
}