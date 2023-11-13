let apiKey = "4be5afe5e53cd4b3126a5264e7bc79a6"
fetch(`=${apiKey}`)
.then(function(response){
    return response.json()
})

let container= document.querySelector('.pelis')
fetch ('https://rickandmortyapi.com/api/character ') 

.then(function(response){
    console.log(response)
    return response.json() 

})
.then(function(data) {
    for(let i=0; i < data.results.length; i++ ){
    container.innerHTML += `
    <article> 
        <h2>${data.results[i].name}</h2>
        <img src=${data.results[i].image}>
    </article>`
}

})
.catch(function(error){
    console.log(error)
})




