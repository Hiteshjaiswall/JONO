import { Box } from '@mui/material';
import React from 'react';

interface MyComponentProps {
  variant: string;
  data: object;
  error: string;
}
const Input: React.FC<MyComponentProps> = ({ variant, data, error }) => {
  return <Box></Box>;
};

export default Input;
