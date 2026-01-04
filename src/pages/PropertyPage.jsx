import { useParams } from "react-router-dom";
import { useState } from "react";
import propertiesData from "../data/properties.json";

function PropertyPage() {

  /* Section: Get property ID from URL */
  const { id } = useParams();

  /* Section: Find selected property from JSON data */
  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  /* Section: Safety check for invalid property ID */
  if (!property) {
    return <p>Property not found</p>;
  }

  /* Section: State for image gallery */
  const [mainImage, setMainImage] = useState(property.images[0]);

  /* Section: State for tab navigation */
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container">

      {/* Section: Basic property information */}
      <h2>{property.type}</h2>
      <p><strong>Price:</strong> £{property.price}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>

      {/* Section: Main property image */}
      <img src={mainImage} alt="Property" className="gallery-main" />

      {/* Section: Thumbnail image gallery */}
      <div className="thumbnails">
        {property.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumbnail"
            className={mainImage === img ? "active" : ""}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      <hr />

      {/* Section: Tab navigation */}
      <div className="tabs">
        <button onClick={() => setActiveTab("description")}>
          Description
        </button>
        <button onClick={() => setActiveTab("floorplan")}>
          Floor Plan
        </button>
        <button onClick={() => setActiveTab("map")}>
          Map
        </button>
      </div>

      {/* Section: Tab content */}
      <div className="tab-content">

        {/* Description tab */}
        {activeTab === "description" && (
          <p>{property.description}</p>
        )}

        {/* Floor plan tab */}
        {activeTab === "floorplan" && (
          <img
            src={property.floorPlan}
            alt="Floor Plan"
            className="floorplan-img"
          />
        )}

        {/* Google map tab */}
        {activeTab === "map" && (
          <iframe
            title="map"
            className="map-frame"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              property.location
            )}&output=embed`}
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default PropertyPage;
