import { arrayContainsArray } from "./util";
import { getIngredientKeys } from "./cocktail.utils";

/**
 * Cocktail filtering rules
 *
 * each rule basically needs to return 'true' if the cocktail should
 * be returned. Adding an export here will automatically make it
 * applyable as a filter so long as an equivalent entry exists
 * in the 'filterConfig'.
 *
 */

export function nameIncludes(cocktail, { searchText }) {
  return cocktail.name.toLowerCase().includes(searchText.toLowerCase());
}

export function mustHaveTruthyProperty(cocktail, { property }) {
  return !!cocktail[property.toString()];
}

export function makeableFrom(cocktail, { ingredients }) {
  const cocktailIngredients = getIngredientKeys(cocktail);
  if (ingredients.length === 0) return false;
  return arrayContainsArray(ingredients, cocktailIngredients);
}

export function mustInclude(cocktail, { ingredients }) {
  const cocktailIngredients = getIngredientKeys(cocktail);
  if (ingredients.length === 0) return true;
  return arrayContainsArray(cocktailIngredients, ingredients);
}

export function canInclude(cocktail, { ingredients }) {
  const cocktailIngredients = getIngredientKeys(cocktail);
  if (ingredients.length === 0) return true;
  return cocktailIngredients.some((i) => ingredients.includes(i));
}

export function mustNotInclude(cocktail, { ingredients }) {
  return !canInclude(cocktail, { ingredients });
}

export function inGlass(cocktail, { glasses }) {
  return glasses.length === 0 || glasses.includes(cocktail.glass);
}

export function inCategory(cocktail, { categories }) {
  return categories.length === 0 || categories.includes(cocktail.category);
}

export function isFavourite(cocktail, { favourites }) {
  return favourites.includes(cocktail.slug);
}
