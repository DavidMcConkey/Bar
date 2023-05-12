import React from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import indigo from "@material-ui/core/colors/indigo";
import red from "@material-ui/core/colors/red";
import teal from "@material-ui/core/colors/teal";
import brown from "@material-ui/core/colors/brown";
import pink from "@material-ui/core/colors/pink";
import cyan from "@material-ui/core/colors/cyan";
import deepPurple from "@material-ui/core/colors/deepPurple";

import { connect } from "react-redux";

export const colors = {
  indigo,
  red,
  teal,
  brown,
  pink,
  purple: deepPurple,
};

function createMuiTheme(color, theme) {
  return createTheme({
    palette: {
      primary: colors[`${color}`],
      secondary: theme === "light" ? pink : cyan,
      type: theme,
    },
    typography: {
      useNextVariants: true,
    },
  });
}

const mapStateToProps = (state) => ({
  color: state.settings.color,
  theme: state.settings.theme,
});

const Theme = ({ color, theme, children }) => (
  <MuiThemeProvider theme={createMuiTheme(color, theme)}>
    <CssBaseline>{children}</CssBaseline>
  </MuiThemeProvider>
);

export default connect(mapStateToProps)(Theme);
