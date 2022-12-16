let url = 'https://www.swapi.tech/api/vehicles';

const get_all_vehicles = async (req,res)=>{
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

const get_one_vehicle = async (req,res)=>{
    const vehicleId = +req.params.vehicleId
    try {
        fetch(`${url}/${vehicleId}`)
        .then(res => res.json())
        .then(text => {
                const vehicleData = text.result.properties
                return res.status(200).json(vehicleData)
            });
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    get_all_vehicles,
    get_one_vehicle
}