import * as React from 'react';
import {Back} from '../../Icons';
import type {IconProps} from '../../types';

function IconRenderer({
  name,
  size = 24,
}: IconProps){
  switch(name){
    case 'back':
      return <Back size={size} />
  }
}

export default IconRenderer;
