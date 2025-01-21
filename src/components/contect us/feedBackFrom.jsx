import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FeedBackFrom = () => {
  return (
    <>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      className='text-white'
    >
        <TextField 
  id="standard-basic" 
  label="Standard" 
  variant="standard" 
  sx={{
    "& .MuiInput-underline:before": { borderBottomColor: "black" }, // Default underline color
    "& .MuiInput-underline:hover:before": { borderBottomColor: "orange" }, // Hover underline color
    "& .MuiInput-underline:after": { borderBottomColor: "green" }, // Focused underline color
    "& .MuiInputBase-input": { color: "white" }, // Input text color
    "& .MuiFormLabel-root": { color: "black" }, // Label color
    "& .MuiFormLabel-root.Mui-focused": { color: "green" }, // Focused label color
  }}
/>
        </Box>
    </>
  )
}

export default FeedBackFrom
