import * as React from 'react';
import {
  Flex,
  Text,
  Icon,
} from '../../../../../../components';
import {useRouting} from '../../../../../../hooks'

type NameAndEditProps = {
  companyName: string;
  onEditPress: () => void;
  officeId: string;
}

function NameAndEdit({
  companyName,
  onEditPress,
  officeId,
}: NameAndEditProps){
  const {navigateOfficeView} = useRouting();
  const navToOffice = () => navigateOfficeView(officeId);
  return (
    <Flex
      alignItems='center'
      justify='space-between'
    >
      <div onClick={navToOffice} className='curser-pointer'>
        <Text type='bold-heading'>
          {companyName}
        </Text>
      </div>
      <Icon name='edit' className='curser-pointer' onClick={onEditPress}/>
    </Flex>
  )
}

export default NameAndEdit;