import * as React from 'react';
import type {
  CommonIconProps,
} from '../../types';

function ArrowDown({
  size,
}: CommonIconProps){
  return (
    <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9201 9.46045L13.4001 16.1321C12.6301 16.92 11.3701 16.92 10.6001 16.1321L4.08008 9.46045" stroke="#0D4477" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ArrowDown;
