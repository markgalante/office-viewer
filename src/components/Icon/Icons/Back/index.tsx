import * as React from 'react';
import type {
  CommonIconProps,
} from '../../types';

function Back({
  size,
}: CommonIconProps){
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.57 5.93L3.5 12L9.57 18.07" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 12H3.67004" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Back;
