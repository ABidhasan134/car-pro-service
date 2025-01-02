'use client'
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const CustomDateTimePicker = () => {
    const { setValue } = useFormContext(); // Get setValue from useFormContext
    const [selectedDate, setSelectedDate] = useState(null);
  

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setValue("dateTime", newDate.toString() || ''); // Update the form value for dateTime
    console.log(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => (
            <TextField
            {...params}
            className="w-full p-4 rounded-full shadow-inner border-gray-600 border-2 focus:outline-none bg-inherit text-black"
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDateTimePicker;
