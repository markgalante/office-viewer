import * as React from 'react';
import type {
  CommonIconProps,
} from '../../types';

function ArrowUp({
  size,
}: CommonIconProps){
  return (
    <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9201 15.7023L13.4001 9.0307C12.6301 8.2428 11.3701 8.2428 10.6001 9.0307L4.08008 15.7023" stroke="#0D4477" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ArrowUp;
