import * as React from 'react';
import {Flex, Text, AddButton} from '../../components'
import {CompanyCard} from './components';
import {useViewOfficeList} from './hooks';
import {useRouting} from '.././../hooks';

export function Home(){
  const {data} = useViewOfficeList();
  const {navigateToAddOfficePage} = useRouting();
  return (
    <>
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
        <AddButton onClick={navigateToAddOfficePage} /> 
      </Flex> 
    </>
  )
};
export {
  CompanyCard,
}