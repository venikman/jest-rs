import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import About from '@/pages/About';

const theme = createTheme();

const renderWithRouter = async (ui: React.ReactElement) => {
  const Stub = createRoutesStub([
    {
      path: "/about",
      Component: () => (
        <ThemeProvider theme={theme}>
          {ui}
        </ThemeProvider>
      ),
    }
  ]);

  return render(<Stub initialEntries={["/about"]} />);
};

describe('About Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders about page content', async () => {
    await renderWithRouter(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('This is a demo project showcasing React with:')).toBeInTheDocument();
  });

  it('renders technology list', async () => {
    await renderWithRouter(<About />);
    expect(screen.getByText('Material UI')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('React Router')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Testing Library')).toBeInTheDocument();
  });
}); 