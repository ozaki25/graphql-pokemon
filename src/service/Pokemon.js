import pokemons from '../pokemons/pokemons.json';

export function getPokemons({ first }) {
  const searchedPokemons = pokemons.slice(0, first);
  return searchedPokemons || null;
}

export function getPokemonById(pokemonId) {
  const pokemon = pokemons.find(({ id }) => id === pokemonId);
  return pokemon || null;
}

export function getPokemonByName(pokemonNameSearch) {
  const pokemonName = pokemonNameSearch.trim();
  const pokemon = pokemons.find(({ name }) => name === pokemonName);
  return pokemon || null;
}

export function getPokemonByEvolutions(evolutions) {
  if (!evolutions) return null;
  const pokemonNames = evolutions.map(({ name }) => name.trim());
  const searchedPokemons = pokemons.filter(
    ({ name }) => pokemonNames.indexOf(name) !== -1,
  );
  return searchedPokemons || null;
}
