import * as React from 'react';
import {Header, Form} from '../components';
import {useOfficeInfo} from '../hooks';
import {useAddOffice} from './hooks';

function AddOffice(){
  const {...allInfo} = useOfficeInfo();
  const {addOffice} = useAddOffice();
  const handleAddOffice = () => {
    addOffice(allInfo.officeInfo);
  }
  return(
    <>
      <Header />
      <Form 
        handleSubmit={handleAddOffice}
        {...allInfo}
      />
    </>
  )
}

export default AddOffice;