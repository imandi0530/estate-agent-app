import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";

function App() {

  /* Section: Global favourites state */
  const [favourites, setFavourites] = useState([]);

  /* Section: Add property to favourites (prevent duplicates) */
  const addFavourite = (property) => {
    if (!favourites.find((p) => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  /* Section: Remove property from favourites */
  const removeFavourite = (id) => {
    setFavourites(favourites.filter((p) => p.id !== id));
  };

  return (
    /* Section: Application routing */
    <Routes>

      {/* Route: Search page */}
      <Route
        path="/"
        element={
          <SearchPage
            favourites={favourites}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
          />
        }
      />

      {/* Route: Property details page */}
      <Route path="/property/:id" element={<PropertyPage />} />

    </Routes>
  );
}

export default App;
