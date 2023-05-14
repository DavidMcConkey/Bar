import React from "react";
import Theme from "./theme";
import CocktailBrowser from "./components/CocktailBrowser";
import CocktailPage from "./components/CocktailPage";
import Bar from "./components/Bar";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div>
      <Theme>
        <Router>
          <Topbar />
          <Routes>
            <Route exact path="/" element={<CocktailBrowser />} />
            <Route exact path="/cocktails" element={<CocktailBrowser />} />
            <Route exact path={"/cocktails/:slug"} element={<CocktailPage />} />
            <Route path="/my-bar" element={<Bar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </Theme>
    </div>
  );
}

export default App;
