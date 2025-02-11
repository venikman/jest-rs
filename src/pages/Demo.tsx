import React, { useState, ChangeEvent } from 'react';
import { Button, TextField } from '@mui/material';
import StarIcon from '@/assets/star.svg';

const Demo: React.FC = () => {
  const [starCount, setStarCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Demo Page</h1>
      
      <div className="space-y-4">
        {/* MUI Components */}
        <div className="space-x-2">
          <Button 
            variant="contained" 
            color="primary"
            type="button"
          >
            MUI Button
          </Button>
          <TextField 
            label="MUI Input" 
            variant="outlined" 
            size="small"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Star Button with Counter */}
        <button 
          onClick={() => setStarCount(prev => prev + 1)}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          <StarIcon className="w-5 h-5" />
          <span>Stars: {starCount}</span>
        </button>

        {/* Tailwind Styled Button */}
        <button 
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tailwind Button
        </button>
      </div>
    </div>
  );
};

export default Demo; 