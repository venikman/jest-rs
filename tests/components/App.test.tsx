import { render, screen, fireEvent, waitFor } from '../setup';
import userEvent from '@testing-library/user-event';
import App from '@/App';

// Basic Rendering Tests
it('renders headings and text content', () => {
  render(<App />);
  expect(screen.getByText('Welcome to React with Rsbuild!')).toBeInTheDocument();
  expect(screen.getByText('Start editing src/App.tsx to see changes')).toBeInTheDocument();
});

// Element Presence Tests
it('renders all interactive elements', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: 'MUI Button' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Tailwind Button' })).toBeInTheDocument();
  expect(screen.getByLabelText('MUI Input')).toBeInTheDocument();
});

// User Interaction Tests
it('increments star count when clicking star button', async () => {
  const user = userEvent.setup();
  render(<App />);
  
  const starButton = screen.getByRole('button', { name: /stars: 0/i });
  await user.click(starButton);
  expect(screen.getByText('Stars: 1')).toBeInTheDocument();
});

// Multiple Interactions Test
it('handles multiple star button clicks correctly', async () => {
  const user = userEvent.setup();
  render(<App />);
  
  const starButton = screen.getByRole('button', { name: /stars: 0/i });
  await user.click(starButton);
  await user.click(starButton);
  await user.click(starButton);
  expect(screen.getByText('Stars: 3')).toBeInTheDocument();
});

// Input Field Tests
it('handles text input correctly', async () => {
  const user = userEvent.setup();
  render(<App />);
  
  const input = screen.getByLabelText('MUI Input');
  await user.type(input, 'Hello World');
  expect(input).toHaveValue('Hello World');
});

// Accessibility Tests
it('has no accessibility violations', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  buttons.forEach(button => {
    expect(button).toHaveAttribute('type');
    expect(button).not.toHaveAttribute('tabindex', '-1');
  });
});

// Style Tests
it('applies correct Tailwind classes', () => {
  render(<App />);
  const tailwindButton = screen.getByRole('button', { name: 'Tailwind Button' });
  expect(tailwindButton).toHaveClass('bg-blue-500', 'hover:bg-blue-700', 'text-white');
});

// Async State Updates
it('updates star count asynchronously', async () => {
  render(<App />);
  const starButton = screen.getByRole('button', { name: /stars: 0/i });
  
  fireEvent.click(starButton);
  await waitFor(() => {
    expect(screen.getByText('Stars: 1')).toBeInTheDocument();
  });
});

// Element Attributes Test
it('has correct button attributes', () => {
  render(<App />);
  const muiButton = screen.getByRole('button', { name: 'MUI Button' });
  expect(muiButton).toHaveAttribute('type', 'button');
  expect(muiButton).toHaveClass('MuiButton-root');
});

// SVG Icon Tests
it('renders star icon with correct attributes', () => {
  render(<App />);
  const starIcon = screen.getByRole('button', { name: /stars/i }).querySelector('svg');
  expect(starIcon).toBeInTheDocument();
  expect(starIcon).toHaveClass('w-5', 'h-5');
});

// Negative Tests
it('does not show incorrect initial star count', () => {
  render(<App />);
  expect(screen.queryByText('Stars: 1')).not.toBeInTheDocument();
});

// Component State Tests
it('maintains correct state after multiple interactions', async () => {
  const user = userEvent.setup();
  render(<App />);
  
  const starButton = screen.getByRole('button', { name: /stars: 0/i });
  const input = screen.getByLabelText('MUI Input');
  
  await user.click(starButton);
  await user.type(input, 'Test');
  await user.click(starButton);
  
  expect(screen.getByText('Stars: 2')).toBeInTheDocument();
  expect(input).toHaveValue('Test');
}); 