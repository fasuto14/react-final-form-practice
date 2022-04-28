import React from 'react';
import './form.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
  return( 
  <div className="container">
       <div className="form">
           <form action="">
            <h1>Form for Register</h1>
            <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="filled"
                size="small"
                margin="dense"
                fullWidth 
            />
            <TextField 
                id="outlined-basic"
                type="password" 
                label="Password" 
                variant="filled"
                size="small"
                margin="dense"
                fullWidth 
            />
            <TextField 
                id="outlined-basic" 
                label="Phone" 
                variant="filled"
                size="small"
                margin="dense"
                fullWidth 
            />
            <Button variant="contained">Register</Button>
           </form>
       </div>
  </div>)
};

export default Form;