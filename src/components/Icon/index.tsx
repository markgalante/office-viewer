import * as React from 'react';
import './styles.css';
import IconRenderer from './components/IconRenderer';
import type {
  IconProps,
} from './types';

export function Icon({
  onClick,
  className = '',
  ...props
}: IconProps){
  return (
    <div
      className={`icon-container ${className}`}
      onClick={onClick ?? undefined}
    >
      <IconRenderer {...props} />
    </div>
  )
};

export * from './types';