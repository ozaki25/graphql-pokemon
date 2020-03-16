import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'PokemonDimension',
  description: 'ポケモンの寸法を表します',
  fields: {
    minimum: {
      type: GraphQLString,
      description: '寸法の最小値',
      resolve: obj => obj.minimum,
    },
    maximum: {
      type: GraphQLString,
      description: '寸法の最大値',
      resolve: obj => obj.maximum,
    },
  },
});
