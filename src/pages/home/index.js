import React from "react";
import Layout from "../../layout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" component="h3" color={"secondary"}>
          Home page...
        </Typography>
        <Typography paragraph>
          Rashy looks to partner with local leaders, not-for-profits and other
          retailers to bring health and fitness to many areas.
        </Typography>
      </Box>
    </Layout>
  );
};

export default Home;
