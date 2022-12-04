import React, { FC, ReactElement } from "react";
import { Typography, Box } from "@mui/material";
interface IFlight {
  priceForAdults: Number;
  priceForChild: Number;
  priceCurrency: string;
}
export const Footer: FC<IFlight> = (props): ReactElement => {
  return <h1>{props.priceCurrency}</h1>;
};
