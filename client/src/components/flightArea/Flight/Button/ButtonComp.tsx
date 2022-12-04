import React, { FC, ReactElement } from "react";
import { Typography, Box, Button } from "@mui/material";

export const ButtonComp: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#ffffff" }}
        onClick={(e) => console.log(e.target)}
      >
        {" "}
        Buy this Flight
      </Button>
    </Box>
  );
};
