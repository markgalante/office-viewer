import * as React from 'react';
import {
  Icon,
  Text,
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
    <div className='header-container'>
      <Icon name='back' size={50} className='curser-pointer header-icon' onClick={goBack} />
      <Text center type='sub-heading'>{title}</Text>
    </div>
  )
};

export default Header;