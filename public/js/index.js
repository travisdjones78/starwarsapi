async function getUsers() {
    let url = 'https://www.swapi.tech/api/';
    try {
        let res = await fetch(url);
        // console.log(res)
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    const basePath = await getUsers();
    const catagoryPath = basePath.result
    const namePath = Object.entries(catagoryPath)
    namePath.forEach(catagory => {
        let label = catagory[0][0].toUpperCase() + catagory[0].slice(1)
        $('#links').append(`
        <div class="card col-2 m-1 mb-2" style="width: 18rem;">
	<div class="card-body">
		<h5 class="card-title">${label}</h5>
		<p class="card-text">A list of all the Star Wars ${label}</p>
		<button class="btn btn-warning">
			<a class="text-white" href="/${label}.html">View ${label}</a>
		</button>
	</div>
</div>                                        
        `)
    })

}
// getUsers()
renderUsers();