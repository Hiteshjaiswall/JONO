// theme.ts
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change to your desired primary color
    },
    secondary: {
      main: '#dc004e', // Change to your desired secondary color
    },
    error: {
      main: '#f44336', // Change to your desired error color
    },
    warning: {
      main: '#ff9800', // Change to your desired warning color
    },
    info: {
      main: '#2196f3', // Change to your desired info color
    },
    success: {
      main: '#4caf50', // Change to your desired success color
    },
    background: {
      default: '#f5f5f5', // Change to your desired background color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Change to your desired font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Change to your desired border radius
        },
        contained: {
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px 0', // Change to your desired margin
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2', // Change to your desired AppBar color
        },
      },
    },
    // Add more component overrides as needed
  },
});

export default theme;
