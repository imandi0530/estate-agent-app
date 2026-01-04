import { Link } from "react-router-dom";

function PropertyCard({ property, addFavourite }) {
  return (
    <div className="property-card">
      <img
        src={property.images[0]}
        alt="Property"
        className="property-card-image"
      />

      <h3>{property.type}</h3>

      <p className="price">£{property.price}</p>

      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>

      <p className="description">
        {property.description.substring(0, 90)}...
      </p>

      <div className="actions">
        <Link to={`/property/${property.id}`}>View Details</Link>

        {addFavourite && (
          <button onClick={() => addFavourite(property)}>
            ❤️ Add to Favourites
          </button>
        )}
      </div>
    </div>
  );
}

export default PropertyCard;
