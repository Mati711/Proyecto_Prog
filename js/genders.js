let api_key = "dd90d0acdb090a890837077054c376e1";
let urlPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;
let urlTv = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`;
fetch(urlPeliculas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let contenedorGeneros = document.querySelector(".generos-peliculas");

    let resultados = data.genres;
    for (let i = 0; i < resultados.length; i++) {
      contenedorGeneros.innerHTML += `<li><a href="./detail-genres.html?id=${resultados[i].id}&type=pelicula&name=${resultados[i].name}">${resultados[i].name}</a></li>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

fetch(urlTv)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let contenedorGeneros = document.querySelector(".generos-tv");

    let resultados = data.genres;
    for (let i = 0; i < resultados.length; i++) {
      contenedorGeneros.innerHTML += `<li><a href="./detail-genres.html?id=${resultados[i].id}&type=serie&name=${resultados[i].name}">${resultados[i].name}</a></li>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
