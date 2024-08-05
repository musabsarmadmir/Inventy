'use client';

import { useRouter } from 'next/navigation';
import { Box, Button, Container, Typography, AppBar, Toolbar, CssBaseline, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GitHub, LinkedIn, Public } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e5e7eb', // Light grey
    },
    background: {
      default: '#000000', // Black background
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#e5e7eb', // Light grey text
    },
  },
});

const LandingPage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/signin');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Inventy
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="80vh"
          textAlign="center"
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Inventy
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your ultimate inventory management tool.
          </Typography>
          <Typography variant="body1" paragraph>
            Keep track of your inventory items, and always know what you have in stock.
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleSignIn} sx={{ mt: 4 }}>
            Sign In
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          mt={2}
          mb={2}
        >
          <a href="https://musabsarmadmir.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main, textDecoration: 'none', margin: '0 1rem' }}>
            <Public />
          </a>
          <a href="https://github.com/musabsarmadmir" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main, textDecoration: 'none', margin: '0 1rem' }}>
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/musabsarmad/" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main, textDecoration: 'none', margin: '0 1rem' }}>
            <LinkedIn />
          </a>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;
