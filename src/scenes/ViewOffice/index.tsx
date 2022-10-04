import * as React from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  CompanyCard,
} from '../Home';
import {
  useFetchOffice,
  Header,
} from '../AddEditOffice/'
import {
  Flex
} from '../../components';

export function ViewOffice(){
  const {uid} = useParams()
  const {
    data
  } = useFetchOffice(uid ?? '');
  return (
    <>
      <Header title='Office' />
      <Flex alignItems='center' flexDirection='column'>
        {
          data ? <CompanyCard officeInfo={data}/> : null
        }
      </Flex>
    </>   
  )
};
