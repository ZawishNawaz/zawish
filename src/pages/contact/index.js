import React from 'react'
import Layout from '../../layout'
import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" component="h3" color={'secondary'}>
        Contact page...
        </Typography>
        <Typography paragraph>
        Whether you have a question about our products, services, or simply want
        to chat, our friendly team is here to help. Don't hesitate to reach out
        using the contact form below. We look forward to hearing from you!
        </Typography>
      </Box>
    </Layout>
  )
}

export default Contact