import * as React from 'react';
import './styles.css'

type TextProps = {
  type?: TextTypes;
  children: React.ReactNode;
};

type TextTypes =
  | 'default'
  | 'sub-heading'

function Text({
  type = 'default',
  children
}: TextProps){
  return (
    <p
      className={[
        type
      ].join(' ')}
    >
      {children}
    </p>
  );
}

export default Text;