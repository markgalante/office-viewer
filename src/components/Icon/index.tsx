import * as React from 'react';
import IconRenderer from './components/IconRenderer';
import type {
  IconProps,
} from './types';

function Icon({
  onClick,
  ...props
}: IconProps){
  return (
    <div
      className='icon-container'
      onClick={onClick ?? undefined}
    >
      <IconRenderer {...props} />
    </div>
  )
};

export default Icon;