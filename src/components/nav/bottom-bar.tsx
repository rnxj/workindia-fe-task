"use client";

import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import WindowIcon from "@mui/icons-material/Window";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import * as React from "react";

import { ThemeToggle } from "./theme-toggle";

export default function BottomBar() {
  const [value, setValue] = React.useState(1);
  const router = useRouter();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/add-item");
        break;
      case 1:
        router.push("/");
        break;
      case 2:
        router.push("/grid");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ThemeToggle />
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 1200,
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => handleNavigation(newValue)}
        >
          <BottomNavigationAction
            label="Add Item"
            value={0}
            icon={<AddIcon />}
          />
          <BottomNavigationAction label="Home" value={1} icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Grid"
            value={2}
            icon={<WindowIcon />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}
