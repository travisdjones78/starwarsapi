let url = 'https://www.swapi.tech/api/people';

const get_all_people = async (req, res) => {
    try {
        fetch(url)
            .then(res => res.json())
            .then(text => {
                console.log(text)
                const peopleData = text.results
                return res.status(200).json(peopleData)
            });
    } catch (error) {
        console.log(error)
    }
}

const get_one_person = async (req, res) => {
    const personId = +`${req.params.personId}` 
    try {
        fetch(`${url}/${personId}`)
            .then(res => res.json())
            .then(text => {
                const personData = text.result.properties
                return res.status(200).json(personData)
            });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get_all_people,
    get_one_person
}