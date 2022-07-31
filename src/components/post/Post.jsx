import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Post() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#f0f1ff', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}