import { render, screen } from '../setup';
import App from '@/App';

describe('App', () => {
  it('renders all components correctly', () => {
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
}); 