import { useState } from "react";
import propertiesData from "../data/properties.json";
import PropertyCard from "../components/property/PropertyCard";
import Favourites from "../components/Favourites";

function SearchPage({ favourites, addFavourite, removeFavourite }) {

  /* Section: Search filter state management */
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [addedAfter, setAddedAfter] = useState("");
  const [postcode, setPostcode] = useState("");

  /* Section: Property filtering logic using multiple criteria */
  const filteredProperties = propertiesData.properties.filter((property) => {
    if (type !== "Any" && property.type !== type) return false;

    if (minPrice && property.price < Number(minPrice)) return false;
    if (maxPrice && property.price > Number(maxPrice)) return false;

    if (minBeds && property.bedrooms < Number(minBeds)) return false;
    if (maxBeds && property.bedrooms > Number(maxBeds)) return false;

    if (addedAfter) {
      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );
      if (propertyDate < new Date(addedAfter)) return false;
    }

    if (postcode) {
      const locationUpper = property.location.toUpperCase();
      if (!locationUpper.includes(postcode)) return false;
    }

    return true;
  });

  return (
    <div className="container">

      {/* Section: Page heading */}
      <h2>Property Listings</h2>

      {/* Section: Search form using React widgets and HTML5 inputs */}
      <div className="filters">
        <label>
          Property Type
          <select
            value={type}
            aria-label="Property type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>

        <label>
          Min Price
          <input
            type="number"
            min="0"
            placeholder="Min £"
            aria-label="Minimum price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>

        <label>
          Max Price
          <input
            type="number"
            min="0"
            placeholder="Max £"
            aria-label="Maximum price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>

        <label>
          Min Bedrooms
          <input
            type="number"
            min="0"
            placeholder="Min beds"
            aria-label="Minimum bedrooms"
            value={minBeds}
            onChange={(e) => setMinBeds(e.target.value)}
          />
        </label>

        <label>
          Max Bedrooms
          <input
            type="number"
            min="0"
            placeholder="Max beds"
            aria-label="Maximum bedrooms"
            value={maxBeds}
            onChange={(e) => setMaxBeds(e.target.value)}
          />
        </label>

        <label>
          Added After
          <input
            type="date"
            aria-label="Date added after"
            value={addedAfter}
            onChange={(e) => setAddedAfter(e.target.value)}
          />
        </label>

        <label>
          Postcode Area
          <input
            type="text"
            placeholder="e.g. BR1"
            aria-label="Postcode area"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
          />
        </label>
      </div>

      {/* Section: Filtered property results */}
      <div className="property-list">
        {filteredProperties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              addFavourite={addFavourite}
            />
          ))
        )}
      </div>

      <hr />

      {/* Section: Favourites list */}
      <Favourites
        favourites={favourites}
        removeFavourite={removeFavourite}
      />
    </div>
  );
}

export default SearchPage;
