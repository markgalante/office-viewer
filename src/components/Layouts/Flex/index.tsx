import * as React from 'react';

type FlexDirectionType = 'row' | 'column';

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
  className?: string;
  gap?: number;
  onClick?: () => void;
  /**
   * Flex direction: default `row` - i.e. items stacked next to one another.
   * `column` - items stacked on top of one another
   */
  flexDirection?: FlexDirectionType;
}

function Flex({
  children,
  alignItems = 'normal',
  justify = 'normal',
  flexWrap = 'nowrap',
  style,
  gap,
  className,
  flexDirection = 'row',
  onClick,
}: FlexProps){
  const styles: React.CSSProperties = {
    display: 'flex',
    alignItems,
    justifyContent: justify,
    flexWrap,
    gap,
    flexDirection,
    ...style,
  }
  return (
    <div
      onClick={onClick}
      className={className}
      style={styles}
    >
      {children}
    </div>
  )
}

export default Flex;