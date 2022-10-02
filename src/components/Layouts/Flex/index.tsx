import * as React from 'react';

type BaseFlexAlignTypes = 
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'normal'

type AlignItemsType = 
  BaseFlexAlignTypes
  | 'stretch'
  | 'baseline';

type JustifyItemsType =
  BaseFlexAlignTypes
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type FlexWrapType = 'wrap' | 'nowrap'

type FlexProps = {
  children: React.ReactNode | Array<React.ReactNode>
  alignItems?: AlignItemsType;
  justify?: JustifyItemsType;
  style?: React.CSSProperties;
  flexWrap?: FlexWrapType;
}

function Flex({
  children,
  alignItems = 'normal',
  justify = 'normal',
  flexWrap = 'nowrap',
  style,
}: FlexProps){
  const styles: React.CSSProperties = {
    display: 'flex',
    alignItems,
    justifyContent: justify,
    flexWrap,
    ...style,
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