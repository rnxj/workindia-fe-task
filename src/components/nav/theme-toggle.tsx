"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton, useTheme } from "@mui/material";
import React from "react";

import { MUIWrapperContext } from "@/components/providers/mui";

export function ThemeToggle() {
  const theme = useTheme();
  const muiUtils = React.useContext(MUIWrapperContext);

  const iconColor = theme.palette.mode === "dark" ? "white" : "black";

  return (
    <Box
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
      }}
    >
      <IconButton
        sx={{ fontSize: "1.5rem" }}
        onClick={muiUtils.toggleColorMode}
        color="inherit"
        disableTouchRipple
        disableRipple
      >
        {theme.palette.mode === "dark" ? (
          <LightModeIcon sx={{ color: iconColor }} />
        ) : (
          <DarkModeIcon sx={{ color: iconColor }} />
        )}
      </IconButton>
    </Box>
  );
}
