import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { CreteFlightForm } from "../../components/createFlightForm/createFlightForm";
export const Dashboard: FC = (): ReactElement => {
  return (
    <>
      <h1> Flight Dash Board Page</h1>
      <CreteFlightForm />;
    </>
  );
};
