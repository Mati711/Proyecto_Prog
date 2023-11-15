let api_key = "dd90d0acdb090a890837077054c376e1";
let qs = location.search;
let qsobj = new URLSearchParams(qs);

let type = qsobj.get("type");
if (type == "pelicula") {
  let idGenero = qsobj.get("id");
  let urldetail = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idGenero}`;
  let tituloURL = qsobj.get("name");
  fetch(urldetail)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let titulo = document.querySelector(".titulo");
      titulo.innerHTML = tituloURL;
      let contenedor = document.querySelector(".resultados-genero");
      for (let i = 0; i < data.results.length; i++) {
        contenedor.innerHTML += `<li>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
        <a href="./detail-movie.html?id=${data.results[i].id}&type=pelicula">${data.results[i].title}</a>
        </li>`;
      }
      console.log(data);
    });
} else {
  let idGenero = qsobj.get("id");
  let urldetail = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=${idGenero}`;
  let tituloURL = decodeURI(qsobj.get("name"));
  fetch(urldetail)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let titulo = document.querySelector(".titulo");
      titulo.innerHTML = tituloURL;
      let contenedor = document.querySelector(".resultados-genero");
      for (let i = 0; i < data.results.length; i++) {
        contenedor.innerHTML += `<li>
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
            <a href="./detail-movie.html?id=${data.results[i].id}&type=serie">${data.results[i].name}</a>
            </li>`;
      }
      console.log(data);
    });
}
