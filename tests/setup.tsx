import '@testing-library/jest-dom';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';

const theme = createTheme();

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  // Add any custom options here if needed
}

const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render }; 