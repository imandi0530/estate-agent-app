import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertyCard from '../components/property/PropertyCard';

const mockProperty = {
  id: 'prop1',
  type: 'House',
  price: 750000,
  bedrooms: 3,
  location: 'Test Location',
};

test('renders add to favourites button', () => {
  render(
    <BrowserRouter>
      <PropertyCard property={mockProperty} addFavourite={() => {}} />
    </BrowserRouter>
  );

  expect(screen.getByText(/Add to Favourites/i)).toBeInTheDocument();
});
