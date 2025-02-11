import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import Home from '@/pages/Home';

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

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders welcome message', async () => {
    renderWithRouter(<Home />);
    const welcomeText = await screen.findByText('Welcome to React with Rsbuild!');
    expect(welcomeText).toBeInTheDocument();
  });

  it('renders demo page link', async () => {
    renderWithRouter(<Home />);
    const demoLink = await screen.findByText('Check out our demo page');
    expect(demoLink).toBeInTheDocument();
  });
}); 