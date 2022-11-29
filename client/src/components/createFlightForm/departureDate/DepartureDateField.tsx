import React, { FC, ReactElement, useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

export const DepartureDate: FC = (): ReactElement => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Departure Date"
          inputFormat="dd/MM/yyyy"
          // value={value}
          value={new Date()}
          onChange={(date) => console.log(date)}
          // onChange={onChange}
          // disabled={disabled}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};
