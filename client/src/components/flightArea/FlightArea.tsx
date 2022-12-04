import React, { FC, ReactElement } from "react";
import { TypeFlight } from "../interfaces/TypeFlight";
import { Grid, Typography } from "@mui/material";
import { Flight } from "./Flight/Flight";
interface IFlight {
  flight: TypeFlight[];
}
export const FlightArea: FC<IFlight> = (props): ReactElement => {
  return (
    <>
      <Grid container minHeight="100vh" p={0} m={0}>
        <Grid item md={6} px={4}>
          {props.flight.length > 0 && props.flight[0].oneway.length > 0 && (
            <>
              <Typography mb={2} component="h2" variant="h6">
                From {props.flight[0].oneway[0].arrivalDestination}
              </Typography>
              <Typography mb={2} component="h2" variant="h6">
                To {props.flight[0].oneway[0].depatureDestination}
              </Typography>
            </>
          )}
          <>
            {props.flight.length > 0 &&
              props.flight[0].oneway.length > 0 &&
              props.flight[0].oneway.map((e, i) => {
                return (
                  <>
                    <Flight
                      departureAt={e.itineraries.depatureAt}
                      arriveAt={e.itineraries.arriveAt}
                      priceForAdults={e.itineraries.prices[0].adult}
                      priceForChild={e.itineraries.prices[0].child}
                      priceCurrency={e.itineraries.prices[0].currency}
                      availableSits={e.itineraries.avaliableSeats}
                    />
                  </>
                );
              })}
          </>
        </Grid>
        <Grid item md={6} px={4}>
          {props.flight.length > 0 && props.flight[0].returnWay.length > 0 && (
            <>
              <Typography mb={2} component="h2" variant="h6">
                From {props.flight[0].returnWay[0].arrivalDestination}
              </Typography>
              <Typography mb={2} component="h2" variant="h6">
                To {props.flight[0].returnWay[0].depatureDestination}
              </Typography>
            </>
          )}
          <>
            {props.flight.length > 0 &&
              props.flight[0].returnWay.length > 0 &&
              props.flight[0].returnWay.map((e, i) => {
                return (
                  <>
                    <Flight
                      departureAt={e.itineraries.depatureAt}
                      arriveAt={e.itineraries.arriveAt}
                      priceForAdults={e.itineraries.prices[0].adult}
                      priceForChild={e.itineraries.prices[0].child}
                      priceCurrency={e.itineraries.prices[0].currency}
                      availableSits={e.itineraries.avaliableSeats}
                    />
                  </>
                );
              })}
          </>
        </Grid>
      </Grid>
    </>
  );
};
