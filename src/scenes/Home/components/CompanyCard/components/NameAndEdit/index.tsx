import * as React from 'react';
import {
  Flex,
  Text,
  Icon,
} from '../../../../../../components';

type NameAndEditProps = {
  companyName: string;
  onEditPress: () => void;
}

function NameAndEdit({
  companyName,
  onEditPress,
}: NameAndEditProps){
  return (
    <Flex
      alignItems='center'
      justify='space-between'
    >
      <Text type='bold-heading'>{companyName}</Text>
      <Icon name='edit' className='curser-pointer' onClick={onEditPress}/>
    </Flex>
  )
}

export default NameAndEdit;