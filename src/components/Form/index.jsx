import React from 'react';
import './form.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form, Field } from 'react-final-form';

const required = value => value ? undefined : 'Required';

const Formu = () => {
  return( 
  <div className="container">
       <div className="form">
           <Form 
                onSubmit={(formObj) => {
                    console.log(formObj);
                }}
            >
                {({handleSubmit,values,submitting})=> (
                    <form onSubmit={handleSubmit}>
                    <h1>Form for Register</h1>
                        <Field name='email'>
                        {({input}) =>(
                            <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="filled"
                            size="small"
                            margin="dense"
                            fullWidth 
                            {...input}
                            validate={required}
                        />
                        )}
                        </Field>
                        <Field name="password">
                        {({input})=>(
                            <TextField 
                            id="outlined-basic"
                            type="password" 
                            label="Password" 
                            variant="filled"
                            size="small"
                            margin="dense"
                            fullWidth
                            {...input} 
                            validate={required}
                        />
                        )}
                        </Field>
                        <Field name="phone">
                        {({input}) =>(
                            <TextField 
                            id="outlined-basic" 
                            label="Phone" 
                            variant="filled"
                            size="small"
                            margin="dense"
                            fullWidth
                            {...input} 
                        />
                        )}
                        </Field>
                        <Button 
                            variant="contained"
                            type="submit"
                        >
                            Register
                        </Button>
                   </form>
                )}
               
           </Form>
       </div>
  </div>)
};

export default Formu;