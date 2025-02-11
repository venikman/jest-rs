import { render, screen } from '../utils/test-utils';
import About from '@/pages/About';

it('renders about page content', () => {
  render(<About />);
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('This is a demo project showcasing React with:')).toBeInTheDocument();
});

it('renders technology list', () => {
  render(<About />);
  expect(screen.getByText('Material UI')).toBeInTheDocument();
  expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  expect(screen.getByText('React Router')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
  expect(screen.getByText('Testing Library')).toBeInTheDocument();
}); 