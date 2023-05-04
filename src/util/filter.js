import compact from "lodash/compact";
import isArray from "lodash/isArray";
import { buildFilter } from "../filterConfig";
import * as rules from "./filterRules";

/**
 * Apply a single filter to a set of cocktails
 * @param {*} cocktails
 * @param {*} filter
 */
export function applyFilter(cocktails, filter) {
  return cocktails.filter((cocktail) => {
    return rules[filter.rule.toString()](cocktail, filter);
  });
}

/**
 * Apply multiple filters, one after the other
 * @param {*} cocktails
 * @param {*} filters
 */
export function applyFilters(cocktails, filters = []) {
  if (!isArray(filters)) filters = [filters];

  return compact(filters).reduce(
    (acc, filter) => [...applyFilter(acc, filter)],
    [...cocktails]
  );
}

export function filtersFromUserOptions(state) {
  const { filterOptions, ...otherState } = state;

  const filters = filterOptions.activeFilters.map((filterRule) => {
    return buildFilter(filterRule)(filterOptions, otherState);
  });

  if (filterOptions.nameFilter) {
    filters.push({
      rule: "nameIncludes",
      searchText: filterOptions.nameFilter,
    });
  }

  return filters;
}
