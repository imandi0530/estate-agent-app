import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertyCard from '../components/property/PropertyCard.jsx';

const mockProperty = {
  id: 'prop1',
  type: 'House',
  price: 750000,
  bedrooms: 3,
  location: 'Test Location',
};

test('renders property card details', () => {
  render(
    <BrowserRouter>
      <PropertyCard property={mockProperty} />
    </BrowserRouter>
  );

  expect(screen.getByText(/House/i)).toBeInTheDocument();
  expect(screen.getByText(/750000/i)).toBeInTheDocument();
});
