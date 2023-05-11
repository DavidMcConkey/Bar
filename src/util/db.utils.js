import {
  fetchCocktails,
  fetchIngredients,
  fetchGlasses,
} from "../services/cocktail.service";
import { loadCocktails, loadIngredients, loadGlasses } from "../actions";

export async function loadDatabase(store) {
  const glasses = await fetchGlasses();
  store.dispatch(loadGlasses(glasses));

  const ingredients = await fetchIngredients();
  store.dispatch(loadIngredients(ingredients));
  const cocktails = await fetchCocktails();
  store.dispatch(loadCocktails(cocktails));
}
