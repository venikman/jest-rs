import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);
    
    expect(screen.getByText('Welcome to React with Rsbuild!')).toBeInTheDocument();
    expect(screen.getByText('Start editing src/App.tsx to see changes')).toBeInTheDocument();
  });
}); 