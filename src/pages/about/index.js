import React from 'react'
import Layout from '../../layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" component="h3" color={'secondary'}>
        About page...
        </Typography>
        <Typography paragraph>
        A great About Us page helps builds trust between you and your customers.
        The more content you provide about you and your business, the more confi-dent
        people will be when purchasing from your store.
        </Typography>
      </Box>
    </Layout>
  )
}

export default About