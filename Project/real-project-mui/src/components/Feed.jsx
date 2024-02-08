import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box flex={isXsScreen ? 6 : 3} p={isXsScreen ? 0 : 2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
