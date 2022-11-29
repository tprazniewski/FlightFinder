import React, { FC, ReactElement, useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
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
      <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
        <DepartureCity />
        <ArriveCity />
      </Stack>
      <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
        <DepartureDate />
        <ArriveDate />
      </Stack>
    </Box>
  );
};
