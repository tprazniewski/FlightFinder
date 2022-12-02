import React, { FC, ReactElement, useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { IDepartureCity } from "./IDepartureCity";

export const DepartureCity: FC<IDepartureCity> = (props): ReactElement => {
  const { onChange } = props;
  return (
    <TextField
      id="From"
      label="From"
      placeholder="Departure"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      // disabled={disabled}
      onChange={onChange}
    />
  );
};
