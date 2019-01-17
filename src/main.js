const data =POKEMON.pokemon;
const selectPokemon = document.getElementById("select");


//mostrando tarjetas
let pokemonCards = "";
let containerRoot = document.getElementById("root");
containerRoot.innerHTML="";
data.forEach(element => {
    pokemonCards +=
    
    `
    <div class="col-sm-12 col-md-3 col-xl-3 col-lg-4">
    <div class="card" >
    <img src="${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${element.name}</p>
      <p class="card-text">${element.num}</p>
      <p class="card-text">${element.type}</p>
    </div>
    </div>
    </div>
    `
});
containerRoot.innerHTML = pokemonCards





