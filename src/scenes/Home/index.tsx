import * as React from 'react';
import {Flex, Text} from '../../components'
import {CompanyCard} from './components';
import {useViewOfficeList} from './hooks';

export function Home(){
  const {data} = useViewOfficeList();

  return (
    <Flex flexDirection='column' gap={20} alignItems='center' style={{marginTop: 15}}>
      <Text type='section-header' textAlign='align-left'>All Offices</Text>
      {
          data?.map(company => (
            (
              <CompanyCard
                key={company.id}
                officeInfo={company}
              />
            )
          ))
      }
    </Flex>  
  )
};
