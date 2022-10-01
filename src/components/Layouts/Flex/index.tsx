import * as React from 'react';

type BaseFlexAlignTypes = 
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'normal'

type AlignItemsType = 
  BaseFlexAlignTypes
  | 'stretch'
  | 'baseline'

type FlexProps = {
  children: React.ReactNode | Array<React.ReactNode>
  alignItems?: AlignItemsType;
}

function Flex({
  children,
  alignItems = 'normal',
}: FlexProps){
  const styles: React.CSSProperties = {
    display: 'flex',
    alignItems,
  }
  return (
    <div
      style={styles}
    >
      {children}
    </div>
  )
}

export default Flex;