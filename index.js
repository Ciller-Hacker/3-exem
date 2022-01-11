var eltypes = document.querySelector('.types-select')
var elpokemonList = document.querySelector('.films-wrapper');

function elementCreator(tagName) {
    return document.createElement(tagName);


function pokemonCreator(pokemon) {
    var item = elementCreator('li');
    var title = elementCreator('h5');
    var elheight = elementCreator('h5');
    var elweight = elementCreator('h5');
   // var types = elementCreator('p');
    var poster = elementCreator('img');
    var inform = elementCreator('div');




    poster.src = pokemon.img;
    poster.width = '157';
    title.textContent = pokemon.name;
   // types.textContent = pokemon.type.join(" , ");
    elheight.textContent = pokemon.height;
    elweight.textContent = pokemon.weight;

    inform.appendChild(elheight);
    inform.appendChild(elweight);

    item.appendChild(title);
  //  item.appendChild(types);
    item.appendChild(poster);
    item.appendChild(inform);

    elpokemonList.appendChild(item);
}

for (var i = 0; i < pokemons.length; i++) {
    pokemonCreator(pokemons[i]);
  


}


}

