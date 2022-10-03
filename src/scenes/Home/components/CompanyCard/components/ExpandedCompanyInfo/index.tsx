import * as React from 'react';
import {
  type IconNames,
  Flex,
  Icon,
  Text,
} from '../../../../../../components';

type ExpandedCompanyInfoProps = {
  icon: IconNames;
  info: string | number
}

function ExpandedCompanyInfo({
  icon,
  info
}: ExpandedCompanyInfoProps){
  return (
    <Flex gap={15}>
      <Icon name={icon} />
      <Text>{info}</Text>
    </Flex>
  )
};

export default ExpandedCompanyInfo;