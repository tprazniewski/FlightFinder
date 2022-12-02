import React, { FC, ReactElement, useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { IArriveCity } from "./IArriveCity";
export const ArriveCity: FC<IArriveCity> = (props): ReactElement => {
  const { onChange } = props;
  return (
    <TextField
      id="To"
      label="To"
      placeholder="Destination"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      // disabled={disabled}
      onChange={onChange}
    />
  );
};
