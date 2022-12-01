import React, { FC, ReactElement, useState, useEffect } from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { OneWayTrigger } from "./oneWayTrigger/OneWayTrigger";
import { ReturnTrigger } from "./returnTrigger/ReturnTrigger";

import { DepartureCity } from "./departureCity/DepartureCityField";
import { ArriveCity } from "./arriveCity/ArriveCityField";

import { DepartureDate } from "./departureDate/DepartureDateField";
import { ArriveDate } from "./arriveDate/ArriveDateField";

import { Passengers } from "./passengers/Passengers";

export const CreteFlightForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Norwegian AirLine
      </Typography>

      <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
        <DepartureCity />
        <ArriveCity />
      </Stack>
      <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
        <DepartureDate />
        <ArriveDate />
      </Stack>
      <Button
        variant="contained"
        size="medium"
        fullWidth
        onClick={(e) => console.log(e)}
      >
        Search for a flight
      </Button>
    </Box>
  );
};
