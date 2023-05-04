import cocktails from "../../server/data/cocktail.json";
import ingredients from "../../server/data/ingredients.json";
import glasses from "../../server/data/glasses.json";

import { isArray } from "lodash";

export function fetchCocktails() {
  return Promise.resolve(
    cocktails.map((cocktail) => {
      const slug = cocktail.name.toLowerCase().replace(/ /, "-");
      const vegan = !cocktail.ingredients
        .filter((i) => i.ingredient)
        .some(function (i) {
          return (
            ingredients[i.ingredient] &&
            ingredients[i.ingredient].vegan === false
          );
        });

      const colors = isArray(cocktail.colors)
        ? cocktail.colors
        : [cocktail.colors];

      return { ...cocktail, slug, vegan, colors };
    })
  );
}

export function fetchIngredients() {
  return Promise.resolve(ingredients);
}

export function fetchGlasses() {
  return Promise.resolve(glasses);
}
