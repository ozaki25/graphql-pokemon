import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql';

const AttackType = new GraphQLObjectType({
  name: 'Attack',
  description: 'ポケモンの攻撃の情報を表します',
  fields: {
    name: {
      type: GraphQLString,
      description: '攻撃の名前',
      resolve: obj => obj.name,
    },
    type: {
      type: GraphQLString,
      description: '攻撃の属性',
      resolve: obj => obj.type,
    },
    damage: {
      type: GraphQLInt,
      description: '攻撃のダメージ',
      resolve: obj => obj.damage,
    },
  },
});

export default new GraphQLObjectType({
  name: 'PokemonAttack',
  description: 'ポケモンの攻撃の情報を表します',
  fields: () => ({
    fast: {
      type: new GraphQLList(AttackType),
      description: '最初から覚えてる攻撃',
      resolve: obj => obj.fast,
    },
    special: {
      type: new GraphQLList(AttackType),
      description: 'わざマシンで覚える攻撃',
      resolve: obj => obj.special,
    },
  }),
});
