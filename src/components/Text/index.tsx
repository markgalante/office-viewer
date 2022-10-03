import * as React from 'react';
import './styles.css'

type TextTypes =
  | 'default'
  | 'sub-heading'
  | 'section-header'
  | 'bold-heading'

type TextAlignTypes =
  | 'align-left'
  | 'align-center';

  type TextProps = {
    type?: TextTypes;
    center?: boolean;
    className?: string;
    children: React.ReactNode;
    textAlign?: TextAlignTypes
  };

function Text({
  type = 'default',
  children,
  className,
  textAlign,
  center = false,
}: TextProps){
  return (
    <p
      className={[
        'standard-font-style',
        type,
        textAlign,
        className,
        center ? 'center' : ''
      ].join(' ')}
    >
      {children}
    </p>
  );
}

export default Text;