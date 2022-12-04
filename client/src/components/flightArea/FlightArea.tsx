import React, { FC, ReactElement } from "react";
import { TypeFlight } from "../interfaces/TypeFlight";

interface IFlight {
  flight: TypeFlight;
}
export const FlightArea: FC<IFlight> = (props): ReactElement => (
  <h1> Flight Area</h1>
);
