import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { SearchFlightForm } from "../../components/createFlightForm/SearchFlightForm";
import { FlightArea } from "../../components/flightArea/FlightArea";
export const Dashboard: FC = (): ReactElement => {
  return (
    <>
      <SearchFlightForm />;
      <FlightArea />
    </>
  );
};
