import { render, screen, fireEvent } from '../setup';
import App from '@/App';

it('renders headings, buttons and input', () => {
  render(<App />);
  
  // Test headings and text
  expect(screen.getByText('Welcome to React with Rsbuild!')).toBeInTheDocument();
  expect(screen.getByText('Start editing src/App.tsx to see changes')).toBeInTheDocument();
  
  // Test buttons
  expect(screen.getByRole('button', { name: 'MUI Button' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Tailwind Button' })).toBeInTheDocument();
  
  // Test MUI TextField
  expect(screen.getByLabelText('MUI Input')).toBeInTheDocument();
});

it('increments star count when clicking star button', () => {
  render(<App />);
  
  const starButton = screen.getByRole('button', { name: /stars: 0/i });
  expect(starButton).toBeInTheDocument();
  
  fireEvent.click(starButton);
  expect(screen.getByText('Stars: 1')).toBeInTheDocument();
  
  fireEvent.click(starButton);
  expect(screen.getByText('Stars: 2')).toBeInTheDocument();
}); 