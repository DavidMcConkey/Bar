import React from "react";
import CocktailCard from "./CocktailCard";
import { ImageList } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = () => {
  return {
    gridList: {
      justifyContent: "center",
    },
  };
};

const CardView = ({ classes, displayedCocktails }) => {
  return (
    <ImageList className={classes.gridList}>
      {displayedCocktails.map((cocktail) => (
        <CocktailCard key={cocktail.name} cocktail={cocktail} />
      ))}
    </ImageList>
  );
};

export default withStyles(styles)(CardView);
