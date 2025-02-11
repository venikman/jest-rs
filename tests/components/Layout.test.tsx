import { render, screen } from '../utils/test-utils';
import Layout from '@/components/Layout';

it('renders navigation links', () => {
  render(<Layout />);
  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Demo' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
});

it('renders with proper structure', () => {
  render(<Layout />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
}); 