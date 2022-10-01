import * as React from 'react';
import {
  Icon,
  Text,
  Flex
} from '../../../../components';
import './styles.css'

function Header(){
  return (
    <Flex alignItems='center'>
      <Icon name='back' size={50} />
      <div className='text-container'>
      <Text center type='sub-heading'>New Office</Text>
      </div>
    </Flex>
  )
};

export default Header;