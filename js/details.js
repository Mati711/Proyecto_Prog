let qs = location.search
let qsobj = new URLSearchParams(qs);

let type = qsobj.get('type')



let section = document.querySelector('.containerDetail')

if (type == "pelicula") {
    let idpelicula = qsobj.get('id')
    let urldetail = `https://api.themoviedb.org/3/movie/${idpelicula}?api_key=dd90d0acdb090a890837077054c376e1&language=en-US`
        fetch(urldetail)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        let contenido = `<h2>${data.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}" border="6">
        <p> <b>Estreno: </b>${data.release_date}</p>
        <p> <b>Duración: </b> ${data.runtime} minutes</p>
        <p>Generos:  ${data.genres[0].name}</p>
        <p>Sinopsis: ${data.overview}</p>`

        section.innerHTML = contenido;


    
        return data;
    })
    .catch(function(error) {
        return error;
    });
        
}


if (type == "serie") {
    let idserie = qsobj.get('id')
    let urlser = `https://api.themoviedb.org/3/tv/${idserie}?api_key=dd90d0acdb090a890837077054c376e1&language=en-US`
        fetch(urlser)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        let contenido = `<h2>${data.name}</h2>
        <img src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}">
        <p> <b>Estreno: </b>${data.first_air_date}</p>
        <p> <b>Duración: </b> ${data.number_of_seasons} seasons</p>
        <p>Generos:  ${data.genres[0].name} </p>
        <p>Sinopsis: ${data.overview}</p>`

        section.innerHTML = contenido;


    
        return data;
    })
    .catch(function(error) {
        return error;
    });
        
}