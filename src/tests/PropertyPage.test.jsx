import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PropertyPage from '../pages/PropertyPage.jsx';

test('shows Property not found for invalid id', () => {
  render(
    <MemoryRouter initialEntries={['/property/invalid']}>
      <Routes>
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Property not found/i)).toBeInTheDocument();
});
