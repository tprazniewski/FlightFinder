import React, { FC, ReactElement } from "react";
import { Typography, Box } from "@mui/material";

interface IFlight {
  departureAt: string;
  arriveAt: string;
}
export const Header: FC<IFlight> = (props): ReactElement => {
  return (
    <>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        mb={3}
        //   flexDirection="column"
      >
        <Typography mb={2} component="h2" variant="h6">
          Departure At: {props.departureAt}
        </Typography>
        <Typography mb={2} component="h2" variant="h6">
          Arrive At: {props.arriveAt}
        </Typography>
      </Box>
    </>
  );
};
