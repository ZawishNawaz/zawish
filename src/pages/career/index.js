import React from 'react'
import Layout from '../../layout'
import { Box, Typography } from '@mui/material';

const Career = () => {
  return (
    <Layout> 
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" component="h3" color={'secondary'}>
        Career page... 
        </Typography>
        <Typography paragraph>
        Aboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in
        </Typography>
      </Box>
    </Layout>
  )
}

export default Career