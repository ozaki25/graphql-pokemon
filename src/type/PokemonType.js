import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from 'graphql';
import { globalIdField } from 'graphql-relay';

import PokemonDimensionType from './PokemonDimensionType';
import PokemonAttackType from './PokemonAttackType';
import EvolutionRequirementType from './EvolutionRequirementType';

import { getPokemonByEvolutions } from '../service/Pokemon';

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'ポケモンの情報を表す',
  fields: () => ({
    id: globalIdField('Pokemon'),
    number: {
      type: GraphQLString,
      description: 'ポケモンの番号',
      resolve: obj => `00${obj.id}`.slice(-3),
    },
    name: {
      type: GraphQLString,
      description: 'ポケモンの名前',
      resolve: obj => obj.name,
    },
    weight: {
      type: PokemonDimensionType,
      description: 'ポケモンの最小重量と最大重量',
      resolve: obj => obj.weight,
    },
    height: {
      type: PokemonDimensionType,
      description: 'ポケモンの最小サイズと最大サイズ',
      resolve: obj => obj.height,
    },
    classification: {
      type: GraphQLString,
      description: 'ポケモンの種別',
      resolve: obj => obj.classification,
    },
    types: {
      type: new GraphQLList(GraphQLString),
      description: 'ポケモンの属性',
      resolve: obj => obj.types,
    },
    resistant: {
      type: new GraphQLList(GraphQLString),
      description: 'ポケモンの耐属性',
      resolve: obj => obj.resistant,
    },
    attacks: {
      type: PokemonAttackType,
      description: 'ポケモンの攻撃',
      resolve: obj => obj.attacks,
    },
    weaknesses: {
      type: new GraphQLList(GraphQLString),
      description: 'ポケモンの弱点属性',
      resolve: obj => obj.weaknesses,
    },
    fleeRate: {
      type: GraphQLFloat,
      description: 'ポケモンのフリーレート',
      resolve: obj => obj.fleeRate,
    },
    maxCP: {
      type: GraphQLInt,
      description: 'ポケモンの最大CP',
      resolve: obj => obj.maxCP,
    },
    evolutions: {
      type: new GraphQLList(PokemonType),
      description: 'ポケモンの進化先',
      resolve: async obj => getPokemonByEvolutions(obj.evolutions),
    },
    evolutionRequirements: {
      type: EvolutionRequirementType,
      description: 'ポケモンの進化に必要な要件',
      resolve: obj => obj.evolutionRequirements,
    },
    maxHP: {
      type: GraphQLInt,
      description: 'ポケモンの最大HP',
      resolve: obj => obj.maxHP,
    },
    image: {
      type: GraphQLString,
      description: 'ポケモンの画像URL',
      resolve: obj =>
        `https://zimg.pokemondb.net/artwork/${obj.enName
          .toLowerCase()
          .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
          .replace(' ', '-')}.jpg`,
    },
  }),
});

export default PokemonType;
