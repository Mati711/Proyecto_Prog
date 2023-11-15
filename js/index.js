let api_key = "dd90d0acdb090a890837077054c376e1"
let urlUserpopular = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
let urlUsertoprated = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;
let urlseriespopu = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`;

let sectionpopular = document.querySelector('.container1')
fetch(urlUserpopular)
    .then(function(response) {
        return response.json();
})
    .then(function(data) {
        console.log(data)
        let result = data.results;
        let contenido = "";

    for (let i = 0; i < 5; i++) {
        contenido += `<article class="peli1">
        <a href="./detail-movie.html?id=${result[i].id}&type=pelicula"><h3>${result[i].title}</h3></a>
        <img src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" border="6">
        <p>Fecha de estreno:${result[i].release_date}</p>
    </article>`
    }

    sectionpopular.innerHTML = contenido;


  
    return data;
})
.catch(function(error) {
    return error;
});



let sectiontoprated = document.querySelector('.container2')
fetch(urlUsertoprated)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let result = data.results;
    let contenido = "";

    for (let i = 0; i < 5; i++) {
        contenido += `<article class="peli1">
        <a href="./detail-movie.html?id=${result[i].id}&type=pelicula"><h3>${result[i].title}</h3></a>
        <img src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" border="6">
        <p>Fecha de estreno:${result[i].release_date}</p>
    </article>`
    }

    sectiontoprated.innerHTML = contenido;


  
    return data;
})
.catch(function(error) {
    return error;
});


let sectionupcoming = document.querySelector('.container3')
fetch(urlseriespopu)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let result = data.results;
    let contenido = "";

    for (let i = 0; i < 5; i++) {
        contenido += `<article class="peli1">
        <a href="./detail-movie.html?id=${result[i].id}&type=serie"><h3>${result[i].name}</h3></a>
        <img src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" border="6">
        <p>Fecha de estreno:${result[i].first_air_date}</p>
    </article>`
    }

    sectionupcoming.innerHTML = contenido;


  
    return data;
})
.catch(function(error) {
    return error;
});



