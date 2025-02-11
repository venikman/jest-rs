import React from 'react';
import { render } from '@testing-library/react';
import { createRoutesFromElements, Route, RouterProvider, createMemoryRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

const theme = createTheme();

const customRender = (ui: React.ReactElement) => {
  const routes = createRoutesFromElements(
    <Route path="/" element={
      <ThemeProvider theme={theme}>
        {ui}
      </ThemeProvider>
    } />
  );

  const router = createMemoryRouter(routes, {
    initialEntries: ['/']
  });

  return render(<RouterProvider router={router} />);
};

export * from '@testing-library/react';
export { customRender as render }; 