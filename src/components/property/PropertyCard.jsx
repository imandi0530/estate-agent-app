import { Link } from "react-router-dom";

function PropertyCard({ property, addFavourite }) {
  return (
    <div className="property-card">

      {/* Display main property image */}
      <img
        src={property.images?.[0] || "/images/placeholder.jpg"}

        alt="Property"
        className="property-card-image"
      />

      {/* Display basic property information */}
      <h3>{property.type}</h3>
      <p className="price">£{property.price}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>

      {/* Display shortened property description */}
      <p className="description">
      {property.description
        ? property.description.substring(0, 90) + "..."
        : "No description available"}
      </p>


      {/* Navigation and user actions */}
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
