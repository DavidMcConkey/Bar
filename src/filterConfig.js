import { keys, get } from "lodash";

import {
  GlassFilterDialog,
  CategoryFilterDialog,
  IngredientFilterDialog,
} from "./components/Filters";

const filterConfig = {
  byIngredient: {
    dialogComponent: IngredientFilterDialog,
    label: "By Ingredient...",
    buildFilter: ({ ingredientsRule, ingredients }) => ({
      rule: ingredientsRule,
      ingredients,
    }),
  },
  byCategory: {
    dialogComponent: CategoryFilterDialog,
    label: "By Category...",
    buildFilter: ({ categories }) => ({
      rule: "inCategory",
      categories,
    }),
  },
  byGlass: {
    dialogComponent: GlassFilterDialog,
    label: "By Glass...",
    buildFilter: ({ glasses }) => ({
      rule: "inGlass",
      glasses,
    }),
  },
  barOnly: {
    label: "Makeable from Bar",
    buildFilter: (_, { bar }) => ({
      rule: "makeableFrom",
      ingredients: bar,
    }),
  },
  favouritesOnly: {
    label: "Favourites only",
    buildFilter: (_, { favourites }) => ({
      rule: "isFavourite",
      favourites,
    }),
  },
  veganOnly: {
    label: "Vegan only",
    buildFilter: () => ({
      rule: "mustHaveTruthyProperty",
      property: "vegan",
    }),
  },
  ibaOnly: {
    label: "IBA only",
    buildFilter: () => ({
      rule: "mustHaveTruthyProperty",
      property: "iba",
    }),
  },
};

function getFilterConfig(filterRule) {
  return filterConfig[filterRule && filterRule.toString()];
}

export function labelFor(filterRule) {
  return get(getFilterConfig(filterRule), "label") || filterRule;
}

export function dialogFor(filterRule) {
  return get(getFilterConfig(filterRule), "dialogComponent");
}

export function hasDialog(filterRule) {
  return !!dialogFor(filterRule);
}

export function buildFilter(filterRule) {
  return get(getFilterConfig(filterRule), "buildFilter");
}

export function getRules() {
  return keys(filterConfig);
}
