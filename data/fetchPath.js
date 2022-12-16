let url = 'https://www.swapi.tech/api/films';
function films() {
    fetch(url)
        .then(res => res.json())
        .then(text => {
            console.log('t', text)
            return text
        });
    return
}
console.log('3', films())


// const fetch = require("node-fetch");
// import { fetch } from "node-fetch";
// // const url = "https://example.com";

// const get_data = async url => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const finalWord = get_data(url);
// console.log('f',finalWord)