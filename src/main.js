const data =(POKEMON.pokemon);
const rootPokemon = document.getElementById("root");
const selectType = document.getElementById("select"); 

//mostrando tarjetas
const showData = (data) =>{
let pokemonCards = " ";

data.forEach(element => {
  pokemonCards = rootPokemon.innerHTML += `
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
}
); 
return pokemonCards;
}


// funcion filtro por tipo
selectType.addEventListener("change",() => {
let condition = selectType.value;
let filterPokemon = filterType(data, condition);

//para limpiar el div select
rootPokemon.innerHTML = "";

filterPokemon.forEach(element =>{
  //if (element.weaknesses[1] === '' && element.type[1] === ''){
    rootPokemon.innerHTML +=  `
    <div class="col-sm-12 col-md-3 col-xl-3 col-lg-4">
    <div class="card" >
    <img src="${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${element.name}</p>
      <p class="card-text">${element.num}</p>
      <p class="card-text"><b>Tipos:</b> ${element.type.join(", ")}</p>
      <p class="card-text"><b>Debilidades</b>: ${element.weaknesses.join(', ')}</p>
    </div>
    </div>
    </div>
    `
}
  
 )
});
window.onload = showData(data);
//rootPokemon.innerHTML = pokemonCards





