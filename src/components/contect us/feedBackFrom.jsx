'use client';

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FeedBackFrom = () => {
  const handelFeedBack = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const description = e.target.description.value;
    console.log(name, email, phone, subject, description);
  };

  return (
    <div className="border-[#FF3811] border-2 rounded-md my-6 p-6 shadow-lg shadow-red-500">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Give us Feedback</h1>
      </div>
      <form onSubmit={handelFeedBack}>
        <Box
          sx={{ "& > :not(style)": { m: 1, width: "340px" } }}
          noValidate
          autoComplete="off"
          className="text-white grid"
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": { borderBottomColor: "red" },
              "& .MuiInput-underline:after": { borderBottomColor: "red" },
              "& .MuiInputBase-input": { color: "red" },
              "& .MuiFormLabel-root": { color: "black" },
              "& .MuiFormLabel-root.Mui-focused": { color: "red" },
            }}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": { borderBottomColor: "red" },
              "& .MuiInput-underline:after": { borderBottomColor: "red" },
              "& .MuiInputBase-input": { color: "red" },
              "& .MuiFormLabel-root": { color: "black" },
              "& .MuiFormLabel-root.Mui-focused": { color: "red" },
            }}
          />
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": { borderBottomColor: "red" },
              "& .MuiInput-underline:after": { borderBottomColor: "red" },
              "& .MuiInputBase-input": { color: "red" },
              "& .MuiFormLabel-root": { color: "black" },
              "& .MuiFormLabel-root.Mui-focused": { color: "red" },
            }}
          />
          <TextField
            id="standard-basic"
            label="Subject"
            variant="standard"
            name="subject"
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": { borderBottomColor: "red" },
              "& .MuiInput-underline:after": { borderBottomColor: "red" },
              "& .MuiInputBase-input": { color: "red" },
              "& .MuiFormLabel-root": { color: "black" },
              "& .MuiFormLabel-root.Mui-focused": { color: "red" },
            }}
          />
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            name="description"
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": { borderBottomColor: "red" },
              "& .MuiInput-underline:after": { borderBottomColor: "red" },
              "& .MuiInputBase-input": { color: "red" },
              "& .MuiFormLabel-root": { color: "black" },
              "& .MuiFormLabel-root.Mui-focused": { color: "red" },
            }}
          />
        </Box>
        <button
          type="submit"
          className="btn border-2 border-red-500 hover:bg-red-500 shadow-md shadow-red-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedBackFrom;
