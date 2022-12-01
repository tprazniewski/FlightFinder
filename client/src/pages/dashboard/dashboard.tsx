import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { CreteFlightForm } from "../../components/createFlightForm/createFlightForm";
import { FlightArea } from "../../components/flightArea/FlightArea";
export const Dashboard: FC = (): ReactElement => {
  return (
    <>
      <CreteFlightForm />;
      <FlightArea />
    </>
  );
};
