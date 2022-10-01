import * as React from 'react';
import {
  Icon,
  Text,
} from '../../components';

function AddOffice(){
  return (
    <div style={{display: 'flex', alignItems:'center'}}>
      <Icon name='back' size={50} />
      <div style={{width: '100%'}}>
      <Text center type='sub-heading'>New Office</Text>
      </div>
    </div>
  );
};

export default AddOffice;