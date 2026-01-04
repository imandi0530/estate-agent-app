function Favourites({ favourites = [], removeFavourite }) {

  return (
    <div style={{ marginTop: "20px" }}>

      {/* Section: Favourites heading */}
      <h3>❤️ Favourites</h3>

      {/* Section: Message shown when no favourites exist */}
      {favourites.length === 0 && <p>No favourites yet</p>}

      {/* Section: List of favourite properties */}
      {favourites.map((property) => (
        <div key={property.id}>

          {/* Display basic favourite property info */}
          <p>
            {property.type} – £{property.price}
          </p>

          {/* Action: Remove property from favourites */}
          <button onClick={() => removeFavourite(property.id)}>
            Remove
          </button>

        </div>
      ))}
    </div>
  );
}

export default Favourites;
