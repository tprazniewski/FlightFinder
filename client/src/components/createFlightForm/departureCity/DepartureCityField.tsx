import React, { FC, ReactElement, useState, useEffect } from "react";
import { TextField } from "@mui/material";

export const DepartureCity: FC = (): ReactElement => {
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
      // onChange={onChange}
    />
  );
};
