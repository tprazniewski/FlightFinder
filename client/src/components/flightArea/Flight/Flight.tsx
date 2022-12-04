import React, { FC, ReactElement } from "react";
import { Box } from "@mui/material";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

interface IFlight {
  departureAt: string;
  arriveAt: string;
  priceForAdults: Number;
  priceForChild: Number;
  priceCurrency: string;
}
export const Flight: FC<IFlight> = (props): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "grey.900",
      }}
    >
      <Header departureAt={props.departureAt} arriveAt={props.arriveAt} />

      <Footer
        priceForAdults={props.priceForAdults}
        priceForChild={props.priceForChild}
        priceCurrency={props.priceCurrency}
      />
    </Box>
  );
};
