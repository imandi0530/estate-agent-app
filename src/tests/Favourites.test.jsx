import { render, screen } from '@testing-library/react';
import Favourites from '../components/Favourites.jsx';

test('shows no favourites message', () => {
  render(<Favourites favourites={[]} removeFavourite={() => {}} />);

  expect(screen.getByText(/No favourites yet/i)).toBeInTheDocument();
});
