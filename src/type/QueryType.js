import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { fromGlobalId } from 'graphql-relay';

import PokemonType from './PokemonType';

import {
  getPokemons,
  getPokemonById,
  getPokemonByName,
  getPokemonByNumber,
} from '../service/Pokemon';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'ID, 番号または名前でポケモンを検索する',
  fields: () => ({
    query: {
      type: QueryType,
      resolve: (...args) => args,
    },
    pokemons: {
      type: new GraphQLList(PokemonType),
      args: {
        first: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (obj, args) => getPokemons(args),
    },
    pokemon: {
      type: PokemonType,
      args: {
        id: {
          type: GraphQLString,
        },
        number: {
          type: GraphQLString,
        },
        name: {
          type: GraphQLString,
        },
      },
      resolve: async (obj, { id, number, name }) => {
        console.log({ id, number, name });

        if (id) {
          return getPokemonById(fromGlobalId(id).id);
        }

        if (number) {
          return getPokemonByNumber(number);
        }

        if (name) {
          return getPokemonByName(name);
        }

        throw new Error(
          'You need to specify either the ID or name of the Pokémon',
        );
      },
    },
  }),
});

export default QueryType;
