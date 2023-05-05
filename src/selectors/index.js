import { createSelector } from "reselect";
import { get, uniq, compact } from "lodash";

import {
  applyFilters,
  applyFilter,
  filtersFromUserOptions,
} from "../utilities/filter";

const allCocktailsSelector = (state) => state.db.cocktails;
export const allGlassesSelector = (state) => state.db.glasses;
const barSelector = (state) => state.bar;
const favouritesSelector = (state) => state.favourites;

const currentSlugFromUrlSelector = (_, props) =>
  get(props, "match.params.slug");

const currentSlugFromCocktailPropSelector = (_, props) =>
  get(props, "cocktail.slug");

const currentSlugSelector = createSelector(
  currentSlugFromUrlSelector,
  currentSlugFromCocktailPropSelector,
  (urlSlug, cocktailPropSlug) => urlSlug || cocktailPropSlug
);

export const isFavouriteSelector = createSelector(
  favouritesSelector,
  currentSlugSelector,
  (favourites, cocktailSlug) => favourites.includes(cocktailSlug)
);

const filtersSelector = (state) => filtersFromUserOptions(state);

export const currentCocktailSelector = createSelector(
  allCocktailsSelector,
  currentSlugSelector,
  (cocktails, slug) => cocktails.find((c) => c.slug === slug)
);

export const filteredCocktailsSelector = createSelector(
  allCocktailsSelector,
  filtersSelector,
  (cocktails, filter) =>
    applyFilters(cocktails, filter).sort((a, b) => (a.name > b.name ? 1 : -1))
);

export const makeableCocktailsSelector = createSelector(
  allCocktailsSelector,
  barSelector,
  (cocktails, bar) =>
    applyFilter(cocktails, {
      rule: "makeableFrom",
      ingredients: bar,
    })
);

export const allCategoriesSelector = createSelector(
  allCocktailsSelector,
  (cocktails) => compact(uniq(cocktails.map((c) => c.category)))
);
