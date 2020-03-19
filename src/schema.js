import { gql } from 'apollo-server';

const typeDefs = gql`
  "ID, 番号または名前でポケモンを検索する"
  type Query {
    pokemons(first: Int!): [Pokemon]
    pokemon(id: String, name: String): Pokemon
  }

  "ポケモンの情報を表す"
  type Pokemon {
    "ポケモンの番号"
    id: String
    "ポケモンの名前"
    name: String
    "ポケモンの最小重量と最大重量"
    weight: PokemonDimension
    "ポケモンの最小サイズと最大サイズ"
    height: PokemonDimension
    "ポケモンの種別"
    classification: String
    "ポケモンの属性"
    types: [String]
    "ポケモンの耐属性"
    resistant: [String]
    "ポケモンの攻撃"
    attacks: PokemonAttack
    "ポケモンの弱点属性"
    weaknesses: [String]
    "ポケモンのフリーレート"
    fleeRate: Float
    "ポケモンの最大CP"
    maxCP: Int
    "ポケモンの進化先"
    evolutions: [Pokemon]
    "ポケモンの進化に必要な要件"
    evolutionRequirements: EvolutionRequirement
    "ポケモンの最大HP"
    maxHP: Int
    "ポケモンの画像URL"
    image: String
  }

  "ポケモンの寸法を表します"
  type PokemonDimension {
    "寸法の最小値"
    minimum: String
    "寸法の最大値"
    maximum: String
  }

  "ポケモンの攻撃の種類を表します"
  type PokemonAttack {
    "最初から覚えてる攻撃"
    fast: [Attack]
    "わざマシンで覚える攻撃"
    special: [Attack]
  }

  "ポケモンの攻撃の情報を表します"
  type Attack {
    "攻撃の名前"
    name: String
    "攻撃の属性"
    type: String
    "攻撃のダメージ"
    damage: Int
  }

  "進化する要件を表します"
  type EvolutionRequirement {
    "進化に必要なキャンディーの量"
    amount: Int
    "進化に必要なキャンディの名前"
    name: String
  }
`;

export default typeDefs;
