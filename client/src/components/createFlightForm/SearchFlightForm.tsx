import React, { FC, ReactElement, useState, useEffect } from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { OneWayTrigger } from "./oneWayTrigger/OneWayTrigger";
import { ReturnTrigger } from "./returnTrigger/ReturnTrigger";

import { DepartureCity } from "./departureCity/DepartureCityField";
import { ArriveCity } from "./arriveCity/ArriveCityField";

import { DepartureDate } from "./departureDate/DepartureDateField";
import { ArriveDate } from "./arriveDate/ArriveDateField";

import { Passengers } from "./passengers/Passengers";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequest } from "../../api/api";
import { ISearchFlight } from "./ISearchFlight";
export const SearchFlightForm: FC = (): ReactElement => {
  // const [title, setTitle] = useState<string | undefined>(undefined);
  const [departureCity, setDepartureCity] = useState<string>("");
  const [arriveCity, setArriveCity] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [arriveDate, setArriveDate] = useState<Date>(new Date());

  // const createTaskMutation = useMutation((data: ISearchFlight) =>
  //   sendApiRequest("http://localhost:999/tasks", "POST", data)
  // );
  const searchFlightHandler = () => {};

  // const createTaskMutation = useMutation((data: any) =>
  //   sendApiRequest("http://localhost:999/tasks", "POST", data)
  // );
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
        <DepartureCity onChange={(e) => setDepartureCity(e.target.value)} />
        <ArriveCity onChange={(e) => setArriveCity(e.target.value)} />
      </Stack>
      <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
        <DepartureDate
          onChange={(date) => setDepartureDate(date)}
          value={departureDate}
        />
        <ArriveDate />
      </Stack>
      <Button
        variant="contained"
        size="medium"
        fullWidth
        onClick={searchFlightHandler}
      >
        Search for a flight
      </Button>
    </Box>
  );
};
