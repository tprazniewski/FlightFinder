import React, { FC, ReactElement } from "react";
import { Typography, Box } from "@mui/material";
interface IFlight {
  priceForAdults: number;
  priceForChild: number;
  priceCurrency: string;
  availableSits: number;
}
export const Footer: FC<IFlight> = (props): ReactElement => {
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
          Adults Price: {props.priceForAdults} {props.priceCurrency}
        </Typography>
        <Typography mb={2} component="h2" variant="h6">
          Child Price: {props.priceForChild} {props.priceCurrency}
        </Typography>
        <Typography mb={2} component="h2" variant="h6">
          Available Seats: {props.availableSits}
        </Typography>
      </Box>
    </>
  );
};
