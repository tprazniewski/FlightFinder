import React, { FC, ReactElement, useState, useEffect } from "react";
import { TextField } from "@mui/material";

export const ArriveCity: FC = (): ReactElement => {
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
      // onChange={onChange}
    />
  );
};
