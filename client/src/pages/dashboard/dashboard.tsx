import React, { FC, ReactElement, useState } from "react";
import { Grid } from "@mui/material";
import { SearchFlightForm } from "../../components/createFlightForm/SearchFlightForm";
import { FlightArea } from "../../components/flightArea/FlightArea";
import { TypeFlight } from "../../components/interfaces/TypeFlight";
export const Dashboard: FC = (): ReactElement => {
  const [flights, setFlights] = useState<TypeFlight>({
    _id: "",
    arrivalDestination: "",
    depatureDestination: "",
    flight_id: "",
    itineraries: [
      {
        arriveAt: "",
        avaliableSeats: 0,
        depatureAt: "",
        prices: [
          {
            adult: 0,
            child: 0,
            currency: "",
          },
        ],
      },
    ],
  });

  const flightHandler = (flight: TypeFlight) => {
    setFlights(flight);
  };
  return (
    <>
      <SearchFlightForm flightHandler={flightHandler} />;
      <FlightArea flight={flights} />
    </>
  );
};
