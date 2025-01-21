import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FeedBackFrom = () => {
  return (
    <div className="border-[#FF3811] border-2 rounded-md mt-6 pt-6">
      <div className="flex justify-center">
        <h1>Give us Feedback</h1>
      </div>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "340px" } }}
        noValidate
        autoComplete="off"
        className="text-white grid"
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "black" }, // Default underline color
            "& .MuiInput-underline:hover:before": { borderBottomColor: "red" }, // Hover underline color
            "& .MuiInput-underline:after": { borderBottomColor: "red" }, // Focused underline color
            "& .MuiInputBase-input": { color: "red" }, // Input text color
            "& .MuiFormLabel-root": { color: "black" }, // Label color
            "& .MuiFormLabel-root.Mui-focused": { color: "red" }, // Focused label color
          }}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "black" }, // Default underline color
            "& .MuiInput-underline:hover:before": { borderBottomColor: "red" }, // Hover underline color
            "& .MuiInput-underline:after": { borderBottomColor: "red" }, // Focused underline color
            "& .MuiInputBase-input": { color: "red" }, // Input text color
            "& .MuiFormLabel-root": { color: "black" }, // Label color
            "& .MuiFormLabel-root.Mui-focused": { color: "red" }, // Focused label color
          }}
        />
        <TextField
          id="standard-basic"
          label="Phone"
          variant="standard"
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "black" }, // Default underline color
            "& .MuiInput-underline:hover:before": { borderBottomColor: "red" }, // Hover underline color
            "& .MuiInput-underline:after": { borderBottomColor: "red" }, // Focused underline color
            "& .MuiInputBase-input": { color: "red" }, // Input text color
            "& .MuiFormLabel-root": { color: "black" }, // Label color
            "& .MuiFormLabel-root.Mui-focused": { color: "red" }, // Focused label color
          }}
        />
        <TextField
          id="standard-basic"
          label="subject"
          variant="standard"
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "black" }, // Default underline color
            "& .MuiInput-underline:hover:before": { borderBottomColor: "red" }, // Hover underline color
            "& .MuiInput-underline:after": { borderBottomColor: "red" }, // Focused underline color
            "& .MuiInputBase-input": { color: "red" }, // Input text color
            "& .MuiFormLabel-root": { color: "black" }, // Label color
            "& .MuiFormLabel-root.Mui-focused": { color: "red" }, // Focused label color
          }}
        />
        <TextField
          id="standard-basic"
          label="Dicription"
          variant="standard"
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "black" }, // Default underline color
            "& .MuiInput-underline:hover:before": { borderBottomColor: "red" }, // Hover underline color
            "& .MuiInput-underline:after": { borderBottomColor: "red" }, // Focused underline color
            "& .MuiInputBase-input": { color: "red" }, // Input text color
            "& .MuiFormLabel-root": { color: "black" }, // Label color
            "& .MuiFormLabel-root.Mui-focused": { color: "red" }, // Focused label color
          }}
        />
      </Box>
    </div>
  );
};

export default FeedBackFrom;
