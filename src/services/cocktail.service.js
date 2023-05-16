import cocktails from "../data/cocktail.json";
import ingredients from "../data/ingredients.json";
import glasses from "../data/glasses.json";
import React, { useState, useEffect } from "react";
import { isArray } from "lodash";

export function RetrieveData() {
  const [cocktails, setCocktails] = useState("");
  const [ingredients, setIngredients] = useState("");

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data.cocktail);
        setIngredients(data.ingredients);
      });
  }, []);
}

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
