'use client';

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSession } from "next-auth/react";
import axios from "axios";

const FeedBackForm = () => {
  const { data: session } = useSession(); // Destructure session for better readability
  const [phoneError, setPhoneError] = useState(""); // State for phone validation error
  const [subjectError, setSubjectError] = useState(""); // State for subject validation error
  const [descriptionError, setDescriptionError] = useState(""); // State for description validation error

  const handleFeedback = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const description = e.target.description.value;

    const userInfo = {
      name: session?.user?.name || name,
      email: session?.user?.email || email,
      phone,
      subject,
      description,
    };

    // Validate Bangladeshi phone number
    const validateBangladeshiPhone = (phone) => {
      const regex = /^(?:\+880|880|01)[1-9][0-9]{8}$/;
      return regex.test(phone);
    };

    // Phone validation
    if (!validateBangladeshiPhone(phone)) {
      setPhoneError("Invalid Bangladeshi phone number. Please try again.");
      return;
    } else {
      setPhoneError(""); // Clear error message
    }

    // Subject validation
    if (subject.length < 6) {
      setSubjectError("Subject must be at least 6 characters long.");
      return;
    } else {
      setSubjectError(""); // Clear error message
    }

    // Description validation
    if (description.length < 10) {
      setDescriptionError("Description must be at least 10 characters long.");
      return;
    } else {
      setDescriptionError(""); // Clear error message
    }

    try {
      const response = await axios.post(`/api/user/mail`, userInfo);
      console.log(response.data);
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again later.");
    }
  };

  return (
    <div className="border-[#FF3811] border-2 rounded-md my-6 p-6 shadow-lg shadow-red-500">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Give us Feedback</h1>
      </div>
      <form onSubmit={handleFeedback}>
        <Box
          sx={{ "& > :not(style)": { m: 1, width: "340px" } }}
          noValidate
          autoComplete="off"
          className="text-white grid"
        >
          <TextField
            label="Name"
            variant="standard"
            name="name"
            defaultValue={session?.user?.name || ""}
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
            label="Email"
            variant="standard"
            name="email"
            defaultValue={session?.user?.email || ""}
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
            label="Phone"
            variant="standard"
            name="phone"
            required
            error={Boolean(phoneError)}
            helperText={phoneError}
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
            label="Subject"
            variant="standard"
            name="subject"
            error={Boolean(subjectError)}
            helperText={subjectError}
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
            label="Description"
            variant="standard"
            name="description"
            error={Boolean(descriptionError)}
            helperText={descriptionError}
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

export default FeedBackForm;
