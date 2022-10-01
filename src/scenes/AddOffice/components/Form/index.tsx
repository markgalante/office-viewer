import * as React from 'react';
import {
  TextField,
  type BaseTextFieldProps
} from '@mui/material';

const commonTextFieldProps: BaseTextFieldProps = {
  variant:'outlined',
  margin:'normal',
  fullWidth: true,
}

function Form(){
  return (
    <div>
      <TextField 
        id='outlined-basic'
        label='Office Name'
        {...commonTextFieldProps}
      />
      <TextField 
        id='outlined-basic'
        label='Physical Address'
        {...commonTextFieldProps}
      />
      <TextField 
        id='outlined-basic'
        label='Email Address'
        type='email'
        {...commonTextFieldProps}
      />
      <TextField 
        id='outlined-basic'
        label='Phone Number'
        type='tel'
        {...commonTextFieldProps}
      />
      <TextField 
        id='outlined-basic'
        label='Maximum Capacity'
        type='number'
        {...commonTextFieldProps}
      />
    </div>
  );
};

export default Form;