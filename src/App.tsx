import React from 'react';
import { Button, TextField } from '@mui/material';
import styles from './styles/button.module.scss';
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to React with Rsbuild!</h1>
      <p className="mb-4">Start editing src/App.tsx to see changes</p>
      
      <div className="space-y-4">
        {/* Custom SCSS Button */}
        <button className={styles.button}>SCSS Button</button>
        
        {/* MUI Components */}
        <div className="space-x-2">
          <Button variant="contained" color="primary">
            MUI Button
          </Button>
          <TextField 
            label="MUI Input" 
            variant="outlined" 
            size="small"
          />
        </div>
        
        {/* Tailwind Styled Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tailwind Button
        </button>
      </div>
    </div>
  );
};

export default App; 