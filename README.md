# BarMate

With a background in Bartending, the amount of times someone would ask me for some cocktail I've never heard of is inumerable. Google always offered way too many variations, which is why I came up with BarMate!
BarMate is a bartenders best friend, it displays all cocktails that are certified by the IBA (International Bartender Association) as well as some fun extras! With correct measurements and necessary garnishes, it's easy to quickly use the filter or search bar to find exactly which cocktail you need to make.

- Browse all 77 IBA cocktails, plus a few fun ones!
- Maintain your bar to describe what you have at home.
- Filter by ingredient, category, glass, vegan or "makeable from your bar"
- Ability to "favourite" cocktails
- Integration with [TheCocktailDB](https://www.thecocktaildb.com/) for enrichment
- Persistence

The main page is where the user can find all the cocktails through scrolling ,searching, or filtering a number of ways. In addition to this the user can favorite their most made drinks so they are easily found in the future.
![Screenshot](/public/Screenshot1.png?raw=true)

The bar page is where the user can select ingredients they have at their disposal to find out which of the cocktails they can make, and filter effectively.
![Screenshot](/public/Screenshot2.png?raw=true)

Settings is where the user can manipulate certain things like theme, units of alcohol, color, as well as a pride mode!
![Screenshot](/public/Screenshot3.png?raw=true)

This site was built using React, Python, Flask, PosgreSQL, and Redux

## Local Usage

To run this locally you would need `nodejs` / `npm` installed. First clone the repo, and then :

```
npm install
npm start
```

## Deployment

This project is being hosted by Vercel within the link [here](https://bar-mate-4fpe.vercel.app/cocktails).
