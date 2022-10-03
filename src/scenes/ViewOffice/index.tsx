import * as React from 'react';
import {
  useParams,
} from 'react-router-dom';
import {CompanyCard} from '../Home';
import {useFetchOffice, Header} from '../AddEditOffice/'

export function ViewOffice(){
  const {uid} = useParams()
  const {
    data
  } = useFetchOffice(uid ?? '');
  console.log('data', data)
  return (
    <>
      <Header title='Office' />
      {
        data ? <CompanyCard officeInfo={data}/> : null
      }
    </>   
  )
};
