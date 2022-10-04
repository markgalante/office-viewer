import * as React from 'react';
import * as Icon from '../../Icons';
import type {IconProps} from '../../types';

function IconRenderer({
  name,
  size = 24,
}: IconProps){
  switch(name){
    case 'add': 
      return <Icon.Add size={size} />
    case 'back':
      return <Icon.Back size={size} />
    case  'edit':
      return <Icon.Edit size={size} />
    case 'email':
      return <Icon.Email size={size} />
    case 'location-pin':
      return <Icon.LocationPin size={size} />
    case 'people':
      return <Icon.People size={size} />
    case 'arrow-down':
      return <Icon.ArrowDown size={size} />
    case 'arrow-up': 
      return <Icon.ArrowUp size={size} />
    case 'phone':
      return <Icon.Phone size={size} />
    case 'people-present':
      return <Icon.PeoplePresent size={size} />
  }
}

export default IconRenderer;
