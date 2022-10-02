import * as React from 'react';
import './styles.css'

type TextProps = {
  type?: TextTypes;
  center?: boolean;
  children: React.ReactNode;
};

type TextTypes =
  | 'default'
  | 'sub-heading'
  | 'section-header'

function Text({
  type = 'default',
  children,
  center = false,
}: TextProps){
  return (
    <p
      className={[
        type,
        center ? 'center' : ''
      ].join(' ')}
    >
      {children}
    </p>
  );
}

export default Text;