import { render, screen } from '../utils/test-utils';
import Home from '@/pages/Home';

it('renders welcome message', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to React with Rsbuild!')).toBeInTheDocument();
});

it('renders demo page link', () => {
  render(<Home />);
  expect(screen.getByText('Check out our demo page')).toBeInTheDocument();
}); 