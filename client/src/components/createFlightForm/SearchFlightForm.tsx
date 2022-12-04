import React, { FC, ReactElement, useState, useEffect } from "react";
import {
  Stack,
  Box,
  Button,
  Typography,
  Checkbox,
  IconButton,
  LinearProgress,
  Grid,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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
import { TypeFlight } from "../interfaces/TypeFlight";

interface IFlight {
  flightHandler: (flight: TypeFlight) => void;
}
export const SearchFlightForm: FC<IFlight> = (props): ReactElement => {
  const { flightHandler } = props;
  // const [title, setTitle] = useState<string | undefined>(undefined);
  const [isOneWay, setIsOneWay] = useState(true);
  const [departureCity, setDepartureCity] = useState<string>("");
  const [arriveCity, setArriveCity] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [arriveDate, setArriveDate] = useState<Date>(new Date());
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const fetchFlights = async (f: any) => {
    // f.queryKey[0]
    const res = await fetch(
      `http://localhost:3005/${f.queryKey[0]}?depatureDestination=${
        f.queryKey[1]
      }&&arrivalDestination=${
        f.queryKey[2]
      }&&depatureAt=${f.queryKey[3].toISOString()}&&arriveAt=${f.queryKey[4].toISOString()}&&isOneWay=${
        f.queryKey[5]
      }&&adult=${f.queryKey[6]}&&child=${f.queryKey[7]}&&infants=${
        f.queryKey[8]
      }`
    );
    const rest = await res.json();
    console.log(rest);
    flightHandler(rest);
    return rest;
  };
  const isOneWayHandler = () => setIsOneWay(!isOneWay);
  const { data, status, refetch } = useQuery(
    [
      "flights",
      departureCity,
      arriveCity,
      departureDate,
      arriveDate,
      isOneWay,
      adults,
      children,
      infants,
    ],
    fetchFlights,
    {
      enabled: false,
    }
  );
  const searchFlightHandler = () => {
    refetch();
  };
  const addAdult = () => {
    setAdults(adults + 1);
  };
  const deductAdult = () => {
    if (adults <= 0) {
      setAdults(0);
    } else {
      setAdults(adults - 1);
    }
  };
  const addChildren = () => {
    setChildren(children + 1);
  };
  const deductChildren = () => {
    if (children <= 0) {
      setChildren(0);
    } else {
      setChildren(children - 1);
    }
  };
  const addInfant = () => {
    setInfants(infants + 1);
  };
  const deductInfant = () => {
    if (infants <= 0) {
      setInfants(0);
    } else {
      setInfants(infants - 1);
    }
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
      <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
        <Typography mb={2} component="h2" variant="h6">
          One Way
        </Typography>

        <Checkbox
          checked={isOneWay}
          onChange={isOneWayHandler}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography mb={2} component="h2" variant="h6">
          Returned
        </Typography>
        <Checkbox
          checked={!isOneWay}
          onChange={isOneWayHandler}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Stack>
      {status === "success" && (
        <Typography mb={2} component="h2" variant="h6">
          the status is : {status}
        </Typography>
      )}

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
      <Stack direction="row">
        <Typography> Adults </Typography>
        <IconButton>
          <RemoveCircleOutlineIcon onClick={deductAdult} />
        </IconButton>
        <Typography>{adults}</Typography>
        <IconButton>
          <AddCircleOutlineIcon onClick={addAdult} />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <Typography> Children 2-11 Years </Typography>
        <IconButton>
          <RemoveCircleOutlineIcon onClick={deductChildren} />
        </IconButton>
        <Typography>{children}</Typography>
        <IconButton>
          <AddCircleOutlineIcon onClick={addChildren} />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <Typography> Infants (0-23 months) </Typography>
        <IconButton>
          <RemoveCircleOutlineIcon onClick={deductInfant} />
        </IconButton>
        <Typography>{infants}</Typography>
        <IconButton>
          <AddCircleOutlineIcon onClick={addInfant} />
        </IconButton>
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
