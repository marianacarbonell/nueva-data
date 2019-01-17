// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
 // return 'example';
//};

//window.example = example;

// funcion filtrar

const filterType = (data,condition) => {
  if (condition === "0") {
    return data;
  }
  const pokeFilter = data.filter(element => {
    if (element.type[0] === condition) return element.type[0] === condition;
    else if (element.type[1] === condition) return element.type[1] === condition;
  });
  return pokeFilter;
  };


