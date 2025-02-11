import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRoutesStub } from 'react-router';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import Demo from '@/pages/Demo';

// Use the proper SVG mock
jest.mock('@/assets/star.svg', () => ({
  __esModule: true,
  default: () => (
    <svg 
      data-testid="star-icon" 
      aria-hidden="true"
      width="20" 
      height="20" 
      viewBox="0 0 20 20"
    >
      <path d="M10 1L13 7L19 8L15 13L16 19L10 16L4 19L5 13L1 8L7 7L10 1Z" />
    </svg>
  ) 
}));

const theme = createTheme();

const renderWithRouter = async (ui: React.ReactElement) => {
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: () => (
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            {ui}
          </ThemeProvider>
        </StyledEngineProvider>
      )
    }
  ]);

  return render(<Stub initialEntries={["/"]} />);
};

describe('Demo Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders demo page content', async () => {
    renderWithRouter(<Demo />);
    const demoText = await screen.findByText('Demo Page');
    expect(demoText).toBeInTheDocument();
  });

  it('handles text input correctly', async () => {
    renderWithRouter(<Demo />);
    const user = userEvent.setup();

    const input = await screen.findByLabelText('MUI Input');
    await act(() => user.type(input, 'Hello World'));
    expect(input).toHaveValue('Hello World');
  });

  it('increments star count when clicking star button', async () => {
    renderWithRouter(<Demo />);
    const user = userEvent.setup();

    const starButton = await screen.findByRole('button', { name: /stars: 0/i });
    await act(() => user.click(starButton));
    const starsText = await screen.findByText('Stars: 1');
    expect(starsText).toBeInTheDocument();
  });

  it('renders all UI elements', async () => {
    renderWithRouter(<Demo />);
    await act(() => new Promise(resolve => setTimeout(resolve, 0)));
    
    expect(await screen.findByRole('button', { name: 'MUI Button' })).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: 'Tailwind Button' })).toBeInTheDocument();
    expect(await screen.findByLabelText('MUI Input')).toBeInTheDocument();
  });
}); 