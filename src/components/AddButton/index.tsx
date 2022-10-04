import * as React from 'react';
import {Icon} from '../Icon/index';
import './styles.css'

type AddButtonProps = {
  onClick: () => void;
}

export function AddButton({
  onClick
}: AddButtonProps){
  return(
    <button
      onClick={onClick}
      className='add-button'
    >
      <Icon name='add' />
    </button>
  );
}