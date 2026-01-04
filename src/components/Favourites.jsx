function Favourites({ favourites = [], removeFavourite }) {

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>❤️ Favourites</h3>

      {favourites.length === 0 && <p>No favourites yet</p>}

      {favourites.map((property) => (
        <div key={property.id}>
          <p>
            {property.type} – £{property.price}
          </p>
          <button onClick={() => removeFavourite(property.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
