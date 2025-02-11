import type { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';

const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [formsPlugin],
  // @ts-ignore - corePlugins is valid but type is missing
  corePlugins: {
    preflight: false,
  },
} satisfies Partial<Config>;

module.exports = {
  plugins: {
    tailwindcss: tailwindConfig,
    autoprefixer: {},
  },
}; 