import * as React from 'react';
import {Text, Icon} from '../../../../../../components';

type ExpandCompressActionsProps = {
  isExpanded: boolean;
}

function ExpandCompressActions({
  isExpanded,
}: ExpandCompressActionsProps){
  if(isExpanded){
    return (
      <>
      <Text>Less Info</Text>
      <Icon name='arrow-up'/> 
      </>
    );
  }

  return (
    <>
      <Text>More Info</Text>
      <Icon name='arrow-down'/> 
    </>
  )
}

export default ExpandCompressActions;