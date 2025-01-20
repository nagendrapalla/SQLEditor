import React from 'react';
import landing_image from '../assets/landing.gif';
import Grid from '@mui/material/Grid2';
import Connection from './Connection';

const Landing: React.FC = () => {
  return (
    <div className='landing' >
      <Grid className='box' container spacing={0}>
        <Grid size={{ xs: 6, md: 6 }} className="left" >
          <Connection />
        </Grid>
        <Grid size={{ xs: 6, md: 6 }} className="right" >
          <img src={landing_image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;