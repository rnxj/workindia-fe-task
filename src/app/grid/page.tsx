"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Grid() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Typography variant="h4" color={(theme) => theme.palette.text.primary}>
        Grid
      </Typography>
    </Box>
  );
}
