let qs = location.search
let qsobj = new URLSearchParams(qs);
let buscador = qsobj.get('search')
let titulo = document.querySelector('.busqueda')
titulo.innerHTML = `TITULOS RELACIONADOS CON TU BUSQUEDA "${buscador}"`
let urlUser = `https://api.themoviedb.org/3/search/movie?api_key=dd90d0acdb090a890837077054c376e1&query=${buscador}&include_adult=false&language=en-US&page=1`

let section_searchresults = document.querySelector('.container1')
fetch(urlUser)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let result = data.results
    console.log(data)
    

    if (result.length > 0) {
        let contenido = ''
        for (let i = 0; i < 20; i++) {
            contenido += `<article class="peli1">
            <a href="./detail-movie.html?id=${result[i].id}&type=pelicula"><h3>${result[i].title}</h3>
            <img src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" border="6"></a>
        </article>`   
        }
    section_searchresults.innerHTML = contenido
    } else {
        titulo.innerHTML = `NO EXISTEN RESULTADOS CON "${buscador}"`
 
    }
   

    


  
    return data;
})
.catch(function(error) {
    return error;
});