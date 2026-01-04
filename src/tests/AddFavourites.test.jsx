import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import PropertyCard from "../components/property/PropertyCard";

describe("Add to Favourites behaviour", () => {
  it("adds property to favourites when button is clicked", () => {
    const mockAddFavourite = vi.fn();

    const property = {
      id: "prop1",
      type: "House",
      price: 750000,
      bedrooms: 3,
      location: "BR1",
      description: "Test description",
      images: ["test.jpg"]
    };

    render(
      <MemoryRouter>
        <PropertyCard
          property={property}
          addFavourite={mockAddFavourite}
        />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByText(/Add to Favourites/i)
    );

    expect(mockAddFavourite).toHaveBeenCalledWith(property);
  });
});
