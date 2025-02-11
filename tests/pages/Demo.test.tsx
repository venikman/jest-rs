import { render, screen } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import Demo from '@/pages/Demo';

it('renders demo page content', () => {
  render(<Demo />);
  expect(screen.getByText('Demo Page')).toBeInTheDocument();
});

it('handles text input correctly', async () => {
  const user = userEvent.setup();
  render(<Demo />);
  
  const input = screen.getByLabelText('MUI Input');
  await user.type(input, 'Hello World');
  expect(input).toHaveValue('Hello World');
});

it('increments star count when clicking star button', async () => {
  const user = userEvent.setup();
  render(<Demo />);
  
  const starButton = screen.getByRole('button', { name: /stars: 0/i });
  await user.click(starButton);
  expect(screen.getByText('Stars: 1')).toBeInTheDocument();
});

it('renders all UI elements', () => {
  render(<Demo />);
  expect(screen.getByRole('button', { name: 'MUI Button' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Tailwind Button' })).toBeInTheDocument();
  expect(screen.getByLabelText('MUI Input')).toBeInTheDocument();
}); 