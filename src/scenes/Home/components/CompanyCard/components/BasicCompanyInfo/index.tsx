import * as React from 'react';
import {
  Flex,
  Divider,
} from '../../../../../../components';
import {ReturnType as ReturnOfficeType} from '../../../../hooks/'
import ExpandCompressActions from '../ExpandCompressActions';
import NameAndEdit from '../NameAndEdit';
import PeoplePresent from '../PeoplePresent';
import ExpandedCompanyInfo from '../ExpandedCompanyInfo';

type BasicCompanyInfoProps = {
  heightClassName: string;
  onExpandCompressClick: () => void;
  isExpanded: boolean;
  office: ReturnOfficeType;
}

function BasicCompanyInfo({
  heightClassName,
  onExpandCompressClick,
  isExpanded,
  office,
}: BasicCompanyInfoProps){
  const {
    name, id, phoneNumber, emailAddress, address, maximumCapacity,
  } = office;
  return(
    <div
    className={`card-info-container ${heightClassName}`}
  >
  <Flex
    className='inner-card-info-container'
    flexDirection='column'
  >
    <NameAndEdit 
      companyName={name}
      officeId={id}
      onEditPress={() => null}
    />
    <PeoplePresent peoplePresent={5} />
    <Divider />
    <Flex alignItems='center' justify='center'>
      <Flex alignItems='center' className='curser-pointer' onClick={onExpandCompressClick}>
        <ExpandCompressActions isExpanded={isExpanded} />
      </Flex>
    </Flex>
    {
      isExpanded ? (
        <>
          <ExpandedCompanyInfo icon='phone' info={phoneNumber} />
          <ExpandedCompanyInfo icon='email' info={emailAddress} />
          <ExpandedCompanyInfo icon='people-present' info={`Office Capacity: ${maximumCapacity}`} />
          <ExpandedCompanyInfo icon='location-pin' info={address}/>
        </>
      ) : null
    }
  </Flex>
  </div>
  )
}

export default BasicCompanyInfo;