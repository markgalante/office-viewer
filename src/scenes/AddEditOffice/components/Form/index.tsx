import * as React from 'react';
import {
  TextField,
  type BaseTextFieldProps
} from '@mui/material';
import './styles.css'
import {
  Flex,
  Text,
} from '../../../../components';

import ColorThemePicker from '../ColorThemePicker';

import type {OfficeColorType} from '../../../../hooks/types';

const commonTextFieldProps: BaseTextFieldProps = {
  variant:'outlined',
  margin:'normal',
  fullWidth: true,
}

const colorThemes: Array<OfficeColorType> = [
  '#FFBE0B',
  '#FF9B71',
  '#FB5607',
  '#97512C',
  '#DBBADD',
  '#FF006E',
  '#A9F0D1',
  '#00B402',
  '#489DDA',
  '#0072E8',
  '#8338EC'
];

function Form(){
  console.log(colorThemes);
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
      <Text type='section-header'>Office Colour</Text>
      <Flex
        alignItems='center'
        justify='space-around'
        flexWrap='wrap'
      >
      {
        colorThemes.map(colorTheme => (
          <ColorThemePicker color={colorTheme} />
        ))
      }
      </Flex>
      <Flex justify='center'>
      <button
        className='add-office-button'
      >
        Add office
      </button>
      </Flex>
    </div>
  );
};

export default Form;