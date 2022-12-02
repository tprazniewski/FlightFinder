import React, { FC, ReactElement, useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { IDate } from "./IDate";

export const DepartureDate: FC<IDate> = (props): ReactElement => {
  const { onChange = (date) => console.log(date), value } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Departure Date"
          inputFormat="dd/MM/yyyy"
          // value={value}
          value={value}
          onChange={onChange}
          // onChange={onChange}
          // disabled={disabled}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};
