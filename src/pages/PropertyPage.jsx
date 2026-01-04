import { useParams } from "react-router-dom";
import { useState } from "react";
import propertiesData from "../data/properties.json";

function PropertyPage() {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  const [mainImage, setMainImage] = useState(property.images[0]);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container">
      <h2>{property.type}</h2>

      <p><strong>Price:</strong> £{property.price}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>

      <img src={mainImage} alt="Property" className="gallery-main" />

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

      <div className="tab-content">
        {activeTab === "description" && (
          <p>{property.description}</p>
        )}

        {activeTab === "floorplan" && (
          <img
            src={property.floorPlan}
            alt="Floor Plan"
            className="floorplan-img"
          />
        )}

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
