import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'PokemonEvolutionRequirement',
  description: '進化する要件を表します',
  fields: {
    amount: {
      type: GraphQLInt,
      description: '進化に必要なキャンディーの量',
      resolve: obj => obj.amount,
    },
    name: {
      type: GraphQLString,
      description: '進化に必要なキャンディの名前',
      resolve: obj => obj.name,
    },
  },
});
