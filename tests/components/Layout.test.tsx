import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import Layout from '@/components/Layout';

const theme = createTheme();

const renderWithRouter = async (ui: React.ReactElement) => {
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: () => (
        <ThemeProvider theme={theme}>
          {ui}
        </ThemeProvider>
      ),
      children: [
        {
          path: "demo",
          Component: () => <div>Demo Page</div>
        },
        {
          path: "about",
          Component: () => <div>About Page</div>
        }
      ]
    }
  ]);

  return render(<Stub initialEntries={["/"]} />);
};

describe('Layout Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders navigation links', async () => {
    await renderWithRouter(<Layout />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Demo' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('renders with proper structure', async () => {
    await renderWithRouter(<Layout />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
}); 