import * as React from 'react';
import {
  Flex,
  Text,
  Icon,
} from '../../../../../../components';

type PeoplePresentProps = {
  peoplePresent: number;
}

function PeoplePresent({
  peoplePresent
}: PeoplePresentProps){
  return (
    <Flex alignItems='center'>
      <Icon name='people'/>
      <Text><span className='bold-text left-margin'>{peoplePresent}</span> Staff Members in Office</Text>
    </Flex>
  )
}

export default PeoplePresent;