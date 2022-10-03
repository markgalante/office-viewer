import * as React from 'react';
import {
  Icon,
  Text,
  Flex
} from '../../../../components';
import './styles.css';
import {useRouting} from '../../../../hooks';

type HeaderProps = {
  title?: string;
}

function Header({
  title = 'New Office'
}: HeaderProps){
  const {goBack} = useRouting();
  return (
    <Flex alignItems='center'>
      <Icon name='back' size={50} className='curser-pointer' onClick={goBack} />
      <div className='text-container'>
      <Text center type='sub-heading'>{title}</Text>
      </div>
    </Flex>
  )
};

export default Header;