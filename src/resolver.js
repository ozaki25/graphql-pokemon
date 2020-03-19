import {
  getPokemons,
  getPokemonById,
  getPokemonByName,
} from './service/Pokemon';

const resolver = {
  Query: {
    pokemons: (_, { first }) => getPokemons({ first }),
    pokemon: (_, { id, name }) => {
      console.log({ id, name });
      if (id) return getPokemonById(id);
      if (name) return getPokemonByName(name);
      throw new Error(
        'You need to specify either the ID or name of the Pokémon',
      );
    },
  },
};

export default resolver;
