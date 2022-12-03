import React, { FC, ReactElement, useState, useEffect } from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { OneWayTrigger } from "./oneWayTrigger/OneWayTrigger";
import { ReturnTrigger } from "./returnTrigger/ReturnTrigger";
import axios from "axios";

import { DepartureCity } from "./departureCity/DepartureCityField";
import { ArriveCity } from "./arriveCity/ArriveCityField";

import { DepartureDate } from "./departureDate/DepartureDateField";
import { ArriveDate } from "./arriveDate/ArriveDateField";

import { Passengers } from "./passengers/Passengers";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../api/api";
import { ISearchFlight } from "./ISearchFlight";
export const SearchFlightForm: FC = (): ReactElement => {
  // const [title, setTitle] = useState<string | undefined>(undefined);
  const [departureCity, setDepartureCity] = useState<string>("");
  const [arriveCity, setArriveCity] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [arriveDate, setArriveDate] = useState<Date>(new Date());

  const fetchFlights = async (f: any) => {
    console.log(f.queryKey);
    // f.queryKey[0]
    const res = await fetch(
      `http://localhost:3005/${f.queryKey[0]}?departureCity=${f.queryKey[1]}&&arriveCity=${f.queryKey[2]}&&departureDate=${f.queryKey[3]}&&arriveDate=${f.queryKey[4]}`
    );
    return await res.json();
  };

  const { data, status, refetch } = useQuery(
    ["flights", departureCity, arriveCity, departureDate, arriveDate],
    fetchFlights,
    {
      enabled: false,
    }
  );

  const searchFlightHandler = () => {
    refetch();
  };

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
        {status}
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
        <ArriveDate
          onChange={(date) => setArriveDate(date)}
          value={arriveDate}
        />
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
