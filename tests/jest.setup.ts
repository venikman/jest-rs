import '@testing-library/jest-dom';

// Mock MUI's useTheme hook
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useTheme: () => ({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
    },
  }),
})); 