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
import type {UseOfficeInfoResult} from '../../hooks';
import ColorThemePicker from '../ColorThemePicker';

import type {OfficeColorType} from '../../types';

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

export type FormProps = 
  UseOfficeInfoResult & {
    handleSubmit: () => void;
  };

function Form({
  officeInfo,
  setColor,
  setEmailAddress,
  setMaxCapacity,
  setOfficeAddress,
  setOfficeName,
  setPhoneNumber,
  handleSubmit,
}: FormProps){
  const {
    address,
    emailAddress,
    name,
    officeColor,
    phoneNumber,
    maximumCapacity,
  } = officeInfo;
  return (
    <div>
      <TextField 
        id='outlined-basic'
        label='Office Name'
        value={name}
        onChange={setOfficeName}
        {...commonTextFieldProps}
      />
      <TextField 
        id='outlined-basic'
        label='Physical Address'
        value={address}
        onChange={setOfficeAddress}
        {...commonTextFieldProps}
      />
      <TextField 
        id='outlined-basic'
        label='Email Address'
        type='email'
        value={emailAddress}
        onChange={setEmailAddress}
        {...commonTextFieldProps}
      />
      <TextField 
        id='outlined-basic'
        label='Phone Number'
        type='tel'
        value={phoneNumber}
        onChange={setPhoneNumber}
        {...commonTextFieldProps}
      />
      <TextField 
        id='outlined-basic'
        label='Maximum Capacity'
        type='number'
        onChange={setMaxCapacity}
        value={maximumCapacity}
        {...commonTextFieldProps}
      />
      <Text type='section-header'>Office Colour</Text>
      <Flex
        alignItems='center'
        justify='space-around'
        flexWrap='wrap'
      >
      {
        colorThemes.map((colorTheme, idx) => (
          <ColorThemePicker
            color={colorTheme}
            setColor={setColor}
            selectedColor={officeColor}
            key={idx}  
          />
        ))
      }
      </Flex>
      <Flex justify='center'>
      <button
        className='add-office-button'
        onClick={handleSubmit}
      >
        Add office
      </button>
      </Flex>
    </div>
  );
};

export default Form;