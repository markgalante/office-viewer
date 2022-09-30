import * as React from 'react';
import IconRenderer from './components/IconRenderer';
import type {
  IconProps,
} from './types';

function Icon({
  ...props
}: IconProps){
  return (
    <div className='icon-container'>
      <IconRenderer {...props} />
    </div>
  )
};

export default Icon;