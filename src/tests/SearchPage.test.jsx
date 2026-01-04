import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchPage from '../pages/SearchPage.jsx';

test('renders Property Listings heading', () => {
  render(
    <BrowserRouter>
      <SearchPage />
    </BrowserRouter>
  );

  expect(screen.getByText(/Property Listings/i)).toBeInTheDocument();
});
