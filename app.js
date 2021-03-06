const fetchPokemon = async () =>{
  for(let i = 1 ; i<=16;i++){
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemon = await res.json();
      createPokemonCard(pokemon);
    } catch (error) {
      console.log(error);    
    }
  }
}

fetchPokemon();

function createPokemonCard(pokemon){
    let cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML=`<div class="card_head"><img id="poke_img" 
         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="pokemon img"></div>
         <div class="card_body">
            <span>#00${pokemon.id}</span>
            <h4>${pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</h4>
            ${pokemon.types.length == 2 ?
             `<p class="pill">${pokemon.types[0].type.name}</p> 
              <p class="pill">${pokemon.types[1].type.name}</p>` 
            : 
             `<p class="pill">${pokemon.types[0].type.name}</p>`}
         </div>`;
    document.querySelector('.poke_cards').appendChild(cardElement);
}